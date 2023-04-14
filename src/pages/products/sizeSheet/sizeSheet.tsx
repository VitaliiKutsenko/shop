import React, { FC, SetStateAction, useEffect, Dispatch } from 'react';
import {
  SizeSheetButtonWrapper,
  SizeSheetWrapper,
} from '@src/pages/products/sizeSheet/sizeSheetStyled';
import { ColorsType } from '@src/store/types/productsType';
import { getSizes } from '@src/services/api';
import { useTypedSelector } from '@src/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setSizesSheet } from '@src/store/reducers/sizesSheet/sizesSheetActions';

export interface SizeSheetProps extends Pick<ColorsType, 'sizes'> {
  currentSize: string;
  setCurrentSize: Dispatch<SetStateAction<string>>;
}
export const SizeSheet: FC<SizeSheetProps> = ({ sizes, setCurrentSize, currentSize }) => {
  const { sizesSheet } = useTypedSelector(store => store.sizesSheet);
  const sizesDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const sizes = await getSizes();

      sizesDispatch(setSizesSheet(sizes));
    })();
  }, [sizesDispatch]);

  return (
    <SizeSheetWrapper>
      {sizesSheet.map(item => {
        return (
          <SizeSheetButtonWrapper
            stroke={currentSize === item.label ? 'orange' : ''}
            key={item.id}
            onClick={() => setCurrentSize(item.label)}
            disabled={!sizes.some(size => size === item.id)}
          >
            <p>{item.label}</p>
            <p>{item.number}</p>
          </SizeSheetButtonWrapper>
        );
      })}
    </SizeSheetWrapper>
  );
};
