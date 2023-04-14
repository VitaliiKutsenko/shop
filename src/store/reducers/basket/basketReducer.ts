import { BasketState } from '@src/store/types/basketType';
import { BasketActionTypes } from '@src/store/reducers/basket/basketActionTypes';
import { BasketActions } from '@src/store/reducers/basket/basketActions';

const initialState: BasketState = { basket: [] };

export const basket = (state = initialState, { type, payload }: BasketActions): BasketState => {
  switch (type) {
    case BasketActionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, payload],
      };

    case BasketActionTypes.REMOVE_FROM_BASKET:
      console.log(payload);

      return {
        ...state,
        basket: [...state.basket.filter(item => item.id !== payload)],
      };

    default:
      return state;
  }
};
