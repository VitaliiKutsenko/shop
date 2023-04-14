import React, { FC, useState } from 'react';
import { ProductsListWrapper } from '@src/pages/products/productsList/productsListStyled';
import { ProductItem } from '@src/store/types/productsType';
import { ColorsList } from '@src/pages/products/colorsList/colorsList';
import { Color } from '@src/pages/products/color/color';
import { SizeSheet } from '@src/pages/products/sizeSheet/sizeSheet';
import { AddToBasket } from '@src/pages/products/addToBasket/addToBasket';

export const ProductsList: FC<ProductItem> = ({ colors, name, id }) => {
  const [state, setState] = useState<number>(0);
  const [currentSize, setCurrentSize] = useState<string>('не указан');
  const handleChangeButton = (index: number) => {
    setState(index);
    setCurrentSize('не указан');
  };

  return (
    <ProductsListWrapper>
      <ul className="prime">
        <Color {...colors[state]} />
      </ul>
      <ul className="info">
        <li className="info_colors">
          <ColorsList state={state} colors={colors} handleChangeButton={handleChangeButton} />
        </li>
        <SizeSheet
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          sizes={colors[state].sizes}
        />
        <AddToBasket currentSize={currentSize} {...colors[state]} />
      </ul>
    </ProductsListWrapper>
  );
};
