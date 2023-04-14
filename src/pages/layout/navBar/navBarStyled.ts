import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  border-radius: 6px;
  background: rgba(153, 149, 149, 0.2);

  & .load-wrapper {
    gap: 20px;
    display: flex;
  }
  & .basket {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: orange;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 6px;
    color: black;
    text-decoration: none;
    & p {
      position: absolute;
      background: white;
      border: 1px solid black;
      width: 30px;
      height: 30px;
      right: -10px;
      top: -10px;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
  }
`;
