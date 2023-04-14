import React from 'react';
import {
  // createHashRouter,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';

import { Layout } from '@src/pages/layout/layout';
import { Products } from '@src/pages/products/products';
import { Main } from '@src/pages/main/main';
import { Basket } from '@src/pages/basket/basket';

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="products/:id" element={<Products />} />

      <Route path="basket" element={<Basket />} />

      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
