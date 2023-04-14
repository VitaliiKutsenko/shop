import { ColorsType } from '@src/store/types/productsType';

export interface Basket extends Omit<ColorsType, 'sizes'> {
  currentSize: string;
}
export interface BasketState {
  basket: Basket[];
}
