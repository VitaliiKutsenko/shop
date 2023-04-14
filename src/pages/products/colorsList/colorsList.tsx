import React, { FC } from 'react';
import { ColorsType } from '@src/store/types/productsType';
import styled from 'styled-components';

interface ColorsListProps {
  colors: ColorsType[];
  type?: string;
  state: number;
  handleChangeButton?: (index: number) => void;
}
export const ColorsList: FC<ColorsListProps> = ({ colors, handleChangeButton, state }) => {
  return (
    <ColorsListWrapper>
      {colors.map((color, index) => (
        <ColorsListItem
          stroke={state === index}
          key={color.images[0]}
          onClick={() => (handleChangeButton ? handleChangeButton(index) : null)}
        >
          <img src={color.images[0]} alt={color.images[0]} />
          {color.name}
        </ColorsListItem>
      ))}
    </ColorsListWrapper>
  );
};

export const ColorsListWrapper = styled.ul`
  list-style: none;
  background: rgba(128, 128, 128, 0.2);
  display: flex;
  width: 100%;
  border-radius: 10px;
`;
export const ColorsListItem = styled.li<{ stroke: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 10px;

  & img {
    border-radius: 10px;
    cursor: pointer;
    width: 150px;
    height: auto;
    box-shadow: 0 0 3px 1px ${({ stroke }) => (stroke ? 'orange' : 'none')};
  }
`;
