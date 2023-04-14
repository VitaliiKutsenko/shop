import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;

  & ul {
    padding: 10px;
    display: flex;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  & li {
    & h3 {
      font-weight: normal;
    }
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
