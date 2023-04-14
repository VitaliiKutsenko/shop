import styled from 'styled-components';

export const BasketWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 80%;
  border-radius: 10px;
  background: rgb(230, 230, 230);
  padding: 50px;
  & .basket_items {
    display: flex;
    gap: 30px;
    flex-direction: column;
    width: 80%;
    height: 80%;
    overflow: auto;
    & li {
      position: relative;
      width: 90%;
      display: flex;
      height: fit-content;
      background: white;
      border-radius: 10px;
      padding: 10px;
      @media (max-width: 500px) {
        flex-direction: column;
      }

      & button {
        @media (max-width: 500px) {
          position: static;
        }
        position: absolute;
        width: fit-content;
        height: fit-content;
        background: tomato;
        border-radius: 6px;
        border: none;
        padding: 5px;
        right: 20px;
        top: 50%;
        bottom: 50%;
      }
      & div {
        border-radius: 0;
        background: white;
      }
      & img {
        width: 100px;
        height: auto;
      }
    }
  }
`;
