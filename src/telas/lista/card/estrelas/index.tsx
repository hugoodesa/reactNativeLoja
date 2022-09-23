/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import estrela from '../../../../../assets/estrela.png';
import estrelaCinza from '../../../../../assets/estrelaCinza.png';

type Props = {
  quantidadeEstrelas: number;
};

export const Estrelas: React.FC<Props> = ({quantidadeEstrelas}) => {
  const [numeroEstrelas, setNumerosEstrelas] =
    useState<number>(quantidadeEstrelas);

  type EstrelaProps = {
    source: any;
  };

  const Estrela = ({source}: EstrelaProps) => {
    return <Image source={source} style={style.estrela} />;
  };

  const handleQuantidadeEstrelas = (pontuacao: number) => {
    setNumerosEstrelas(pontuacao);
  };

  const renderizarEstrelas = (): JSX.Element[] => {
    const estrelas: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
      estrelas.push(
        <TouchableOpacity key={i} onPress={() => handleQuantidadeEstrelas(i)}>
          <Estrela
            key={i}
            source={i <= numeroEstrelas ? estrela : estrelaCinza}
          />
        </TouchableOpacity>,
      );
    }

    return estrelas;
  };

  return (
    <View style={style.container}>{renderizarEstrelas().map(el => el)}</View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '65%',
  },
  estrela: {
    height: 13,
    width: 13,
    marginRight: 2,
  },
});
