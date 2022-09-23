/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../../assets/logo.png';
import { BoasVindas } from '../../mocks/topo';
import { getTopo } from '../../services';

export const Topo: React.FC = () => {
  const [topoAplicacao, setTopoAplicacao] = useState<BoasVindas>({
    boasVindas: '',
    legenda: '',
  });

  useEffect(() => {
    setTopoAplicacao(getTopo());
  }, []);

  return (
    <View style={style.container}>
      <Image source={logo} style={style.image} />
      <Text style={style.boasVindas}>{topoAplicacao.boasVindas}</Text>
      <Text>{topoAplicacao.legenda}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  image: {
    height: 28,
    width: 70,
  },
  boasVindas: {
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 25,
  },
});
