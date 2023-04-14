import React from 'react';
import { NavBarWrapper } from './navBarStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '@src/hooks/useTypedSelector';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { basket } = useTypedSelector(store => store.basket);
  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    location.pathname !== '/basket' ? navigate('basket') : navigate('/');
  };

  return (
    <NavBarWrapper>
      <button className="basket" onClick={handleNavigate}>
        {basket.length > 0 ? <p>{basket.length}</p> : null}
        {location.pathname !== '/basket' ? 'Корзина' : 'Вернуться на главную страницу'}
      </button>
    </NavBarWrapper>
  );
};
