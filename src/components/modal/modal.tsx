import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindowWrapper } from '@src/components/modal/modalStyled';

const modalRootElement = document.querySelector<HTMLDivElement>('#modal');

export interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const ModalWindow: FC<ModalWindowProps> = ({ open, onClose, children }) => {
  const element = useMemo(() => document.createElement('div'), []);
  const closeModalHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const modalElem = e.currentTarget.id === 'close_modal';

      if (modalElem) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect((): any => {
    if (open && modalRootElement) {
      modalRootElement.appendChild(element);

      return () => modalRootElement.removeChild(element);
    }
  }, [open]);

  if (open) {
    return createPortal(
      <ModalWindowWrapper id="close_modal" onClick={closeModalHandler}>
        {children}
      </ModalWindowWrapper>,
      element
    );
  }

  return null;
};
