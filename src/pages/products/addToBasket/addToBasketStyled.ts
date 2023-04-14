import styled from 'styled-components';

export const AddToBasketWrapper = styled.div`
  background: rgba(128, 128, 128, 0.2);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & button {
    border: none;
    background: orange;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 6px;
    color: black;
    text-decoration: none;
  }
`;
