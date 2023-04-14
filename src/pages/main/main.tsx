import React, { FC, useEffect } from 'react';
import { getProducts } from '@src/services/api';
import { setProducts } from '@src/store/reducers/user/productsActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@src/hooks/useTypedSelector';
import { MainWrapper } from '@src/pages/main/mainStyled';
import { CustomLink } from '@src/components/customLink/customLink';
import { Color } from '@src/pages/products/color/color';

export const Main: FC = () => {
  const mainDispatch = useDispatch();
  const { products } = useTypedSelector(store => store.products);

  useEffect(() => {
    (async () => {
      try {
        const product = await getProducts();

        mainDispatch(setProducts(product));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [mainDispatch]);

  console.log(products);

  return (
    <MainWrapper>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <CustomLink key={product.id} text={product.name} to={`/products/${product.name}`}>
            <Color images={product.colors[0].images} />
          </CustomLink>
        </li>
      ))}
    </MainWrapper>
  );
};
