import { ProductsActionTypes } from '@src/store/reducers/user/productsActionTypes';
import { ProductItem } from '@src/store/types/productsType';

export interface ProductsActions {
  type: ProductsActionTypes;
  payload?: ProductItem[];
}
export const setProducts = (payload: ProductItem[]) => ({
  type: ProductsActionTypes.SET_PRODUCTS,
  payload,
});
