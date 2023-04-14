import { combineReducers } from 'redux';
import { products } from '@src/store/reducers/user/productsReducer';
import { ProductState } from '@src/store/types/productsType';
import { SizesSheetState } from '@src/store/types/sizesSheetType';
import { sizesSheet } from '@src/store/reducers/sizesSheet/sizesSheetReducer';
import { basket } from '@src/store/reducers/basket/basketReducer';
import { BasketState } from '@src/store/types/basketType';

export interface RootReducerType {
  products?: ProductState;
  sizesSheet?: SizesSheetState;
  basket?: BasketState;
}
export const rootReducer = combineReducers({
  products,
  sizesSheet,
  basket,
});
export type RootState = ReturnType<typeof rootReducer>;
