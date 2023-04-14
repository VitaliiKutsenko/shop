import React, { FC } from 'react';
import { BasketWrapper } from '@src/pages/basket/basketStyled';
import { useTypedSelector } from '@src/hooks/useTypedSelector';
import { AddToBasket } from '@src/pages/products/addToBasket/addToBasket';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '@src/store/reducers/basket/basketActions';

export const Basket: FC = () => {
  const { basket } = useTypedSelector(store => store.basket);
  const basketDispatch = useDispatch();
  const handleRemoveItem = (id: string) => {
    basketDispatch(removeFromBasket(id));
  };

  return (
    <BasketWrapper>
      <h2>Корзина</h2>
      <div className="basket_items">
        {basket.length > 0
          ? basket.map(item => {
              return (
                <li key={`${item.images} + ${item.id}`}>
                  <img src={item.images[0]} alt="item.images" />
                  <AddToBasket {...item} type="basket" />
                  <button onClick={() => handleRemoveItem(String(item.id))}>Удалить</button>
                </li>
              );
            })
          : 'Корзина пустая'}
      </div>
    </BasketWrapper>
  );
};
