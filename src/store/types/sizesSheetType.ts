export interface SizesSheet {
  id: number;
  label: string;
  number: number;
}
export interface SizesSheetState {
  sizesSheet: SizesSheet[];
  isLoading: boolean;
  error: null | string;
}
