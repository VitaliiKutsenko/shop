export interface ColorsType {
  description: string;
  id: number;
  images: string[];
  name: string;
  price: string;
  sizes: number[];
}
export interface ProductItem {
  colors: ColorsType[];
  id: number;
  name: string;
}
export interface ProductState {
  products: ProductItem[] | [];
  loading: boolean;
  error: null | string;
}
