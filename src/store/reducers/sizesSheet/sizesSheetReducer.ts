import { SizesSheetActionTypes } from '@src/store/reducers/sizesSheet/sizesSheetActionTypes';
import { SizesSheetState } from '@src/store/types/sizesSheetType';
import { SizesSheetAction } from '@src/store/reducers/sizesSheet/sizesSheetActions';

const initialState: SizesSheetState = {
  sizesSheet: [],
  isLoading: false,
  error: null,
};

export const sizesSheet = (
  state = initialState,
  { type, payload }: SizesSheetAction
): SizesSheetState => {
  switch (type) {
    case SizesSheetActionTypes.SET_SIZES_SHEET:
      if (payload) {
        return {
          ...state,
          sizesSheet: payload,
          isLoading: true,
        };

        return state;
      }

    default:
      return state;
  }
};
