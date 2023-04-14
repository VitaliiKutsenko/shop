import styled from 'styled-components';

export const SizeSheetWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const SizeSheetButtonWrapper = styled.button<{ stroke: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 3px 1px ${({ stroke }) => (stroke === 'orange' ? 'orange' : 'white')};
  padding: 10px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.2);

  & p {
    font-size: 18px;
  }

  &:after {
    top: 50%;
    content: '';
    width: 120px;
    height: 2px;
    box-shadow: inset 0 0 3px 1px ${({ stroke }) => (stroke === 'orange' ? 'orange' : 'white')};
    position: absolute;
    transform: rotate(10deg);
  }
`;
