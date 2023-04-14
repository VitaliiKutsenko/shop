import { SizesSheetActionTypes } from '@src/store/reducers/sizesSheet/sizesSheetActionTypes';
import { SizesSheet } from '@src/store/types/sizesSheetType';

export interface SizesSheetAction {
  type: SizesSheetActionTypes;
  payload?: SizesSheet[];
}
export const setSizesSheet = (payload: SizesSheet) => ({
  type: SizesSheetActionTypes.SET_SIZES_SHEET,
  payload,
});
