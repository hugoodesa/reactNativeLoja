/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { Produtor } from '../../mocks/lista';
import { getProdutores } from '../../services';
import { Topo } from '../topo';
import { Card } from './card';

export const Lista = () => {
  const [listaProdutores, setListaProdutores] = useState<Produtor[]>([]);

  const TopoComponent = (): JSX.Element => {
    return <Topo />;
  };

  const Titulo = (): JSX.Element => {
    return <Text style={style.titulo}>Produtores</Text>;
  };

  const HeaderComponent = () => {
    return (
      <>
        {TopoComponent()}
        {Titulo()}
      </>
    );
  };

  useEffect(() => {
    setListaProdutores(
      getProdutores().sort((a, b) => b.numeroEstrelas - a.numeroEstrelas),
    );
  }, []);

  return (
    <FlatList
      data={listaProdutores}
      ListHeaderComponent={HeaderComponent}
      renderItem={({item}) => {
        return (
          <>
            <Card produtor={item} />
          </>
        );
      }}
      keyExtractor={item => item.nome}
    />
  );
};

const style = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    padding: 10,
  },
});
