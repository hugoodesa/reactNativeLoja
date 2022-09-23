/* eslint-disable prettier/prettier */
import logo1 from '../../../assets/produtores/green.png';
import logo2 from '../../../assets/produtores/grow.png';
import logo5 from '../../../assets/produtores/jenny-jack.png';
import logo3 from '../../../assets/produtores/potager.png';
import logo4 from '../../../assets/produtores/salad.png';

export type Produtor = {
  nome: string;
  logo: any;
  numeroEstrelas: number;
  distancia: number;
};

export const produtores: Produtor[] = [
  {logo: logo1, nome: 'Green', numeroEstrelas: 3, distancia: 20},
  {logo: logo2, nome: 'Grow', numeroEstrelas: 4, distancia: 30},
  {logo: logo3, nome: 'Potager', numeroEstrelas: 3, distancia: 55},
  {logo: logo4, nome: 'Salad', numeroEstrelas: 2, distancia: 10},
  {logo: logo5, nome: 'Jenny Jack', numeroEstrelas: 1, distancia: 5},
];
