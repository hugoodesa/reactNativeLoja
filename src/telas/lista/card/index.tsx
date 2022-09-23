/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Produtor } from '../../../mocks/lista';
import { Estrelas } from './estrelas';

type Props = {
  produtor: Produtor;
};

export const Card: React.FC<Props> = ({produtor}) => {
  const [cardSelected, setCardSelected] = useState<boolean>(false);

  const distancia = useMemo(() => produtor.distancia, [produtor.distancia]);

  const focusCard = () => {
    setCardSelected(!cardSelected);
  };

  return (
    <TouchableOpacity
      onPress={focusCard}
      style={cardSelected ? style.containerFocus : style.container}>
      <Image source={produtor.logo} style={style.image} />

      <View style={style.secondContainer}>
        <Text style={style.titulo}>{produtor.nome}</Text>
        <Estrelas quantidadeEstrelas={produtor.numeroEstrelas} />
      </View>

      <View style={style.distancia}>
        <Text style={style.distanciaTexto}>{distancia}m</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#d9d2d2',
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
  },
  containerFocus: {
    backgroundColor: '#5c5858',
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    elevation: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  descricao: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 8,
    marginRight: 16,
    marginLeft: 16,
    borderColor: 'red',
    borderWidth: 2,
    height: 25,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 5,
    width: '70%',
  },
  secondContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  distancia: {
    flex: 1,
    alignItems: 'center',
  },
  distanciaTexto: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 15,
  },
});
