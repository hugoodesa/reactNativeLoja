/* eslint-disable prettier/prettier */
import { Produtor, produtores } from './../mocks/lista';
import { BoasVindas, mockTopo } from './../mocks/topo';

export const getProdutores = (): Produtor[] => {
  return produtores;
};

export const getTopo = (): BoasVindas => {
  return mockTopo;
};
