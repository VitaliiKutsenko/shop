import styled from 'styled-components';

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  & .prime {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  & .info {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & li .info_colors {
    display: flex;
  }
`;
