/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Lista } from './src/telas/lista';

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.tela}>
      <Lista />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  tela: {flex: 1},
});

export default App;
