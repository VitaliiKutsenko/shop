import React, { FC, useEffect } from 'react';
import { ProductsWrapper } from '@src/pages/products/productsStyled';
import { getProducts } from '@src/services/api';
import { setProducts } from '@src/store/reducers/user/productsActions';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@src/hooks/useTypedSelector';
import { ProductsList } from '@src/pages/products/productsList/productsList';
import { useParams } from 'react-router-dom';

export const Products: FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { products } = useTypedSelector(store => store.products);

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        try {
          const product = await getProducts();

          dispatch(setProducts(product));
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [products, dispatch]);

  return (
    <ProductsWrapper>
      {params.id}
      {params.id && products.length > 0 ? (
        <ProductsList {...products.find(product => product?.name === params?.id)!} />
      ) : null}
    </ProductsWrapper>
  );
};
