import { BasketActionTypes } from '@src/store/reducers/basket/basketActionTypes';

export interface addToBasketAction {
  type: BasketActionTypes.ADD_TO_BASKET;
  payload?: any;
}
export const addToBasket = (payload: any) => ({
  type: BasketActionTypes.ADD_TO_BASKET,
  payload,
});

export interface removeFromBasketAction {
  type: BasketActionTypes.REMOVE_FROM_BASKET;
  payload?: any;
}
export const removeFromBasket = (payload: any) => ({
  type: BasketActionTypes.REMOVE_FROM_BASKET,
  payload,
});

export type BasketActions = addToBasketAction | removeFromBasketAction;
