import React, { FC } from 'react';
import { AddToBasketWrapper } from '@src/pages/products/addToBasket/addToBasketStyled';
import { ColorsType } from '@src/store/types/productsType';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@src/store/reducers/basket/basketActions';

export interface AddToBasketProps extends Omit<ColorsType, 'sizes'> {
  currentSize: string;
  type?: string;
}
export const AddToBasket: FC<AddToBasketProps> = ({
  currentSize,
  description,
  price,
  name,
  id,
  images,
  type,
  ...props
}) => {
  const addToBasketDispatch = useDispatch();

  const handleDispatchToStore = () => {
    addToBasketDispatch(
      addToBasket({
        id: Date.now().toString(),
        name,
        price,
        currentSize,
        description,
        images,
      })
    );
  };

  return (
    <AddToBasketWrapper>
      <p>{description}</p>
      <p>Размер: {currentSize}</p>
      <p>Цвет: {name}</p>
      <p>Цена: {price}</p>
      {type === 'basket' ? null : (
        <button onClick={handleDispatchToStore}>Добавить в корзину</button>
      )}
    </AddToBasketWrapper>
  );
};
