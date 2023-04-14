import { ProductsActions } from '@src/store/reducers/user/productsActions';
import { ProductsActionTypes } from '@src/store/reducers/user/productsActionTypes';
import { ProductState } from '@src/store/types/productsType';

const initialState: ProductState = {
  products: [],
  loading: true,
  error: null,
};

export const products = (
  state = initialState,
  { type, payload }: ProductsActions
): ProductState => {
  switch (type) {
    case ProductsActionTypes.SET_PRODUCTS:
      if (payload) {
        return {
          ...state,
          products: payload,
          loading: false,
        };

        return state;
      }

    default:
      return state;
  }
};
