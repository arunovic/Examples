export interface ProductDto {
    id?: number;
    title?: string;
    description?: null | string;
    price?: null | number;
    discountPercentage?: null | number;
    rating?: null | number;
    stock?: null | number;
    brand?: null | string;
    category?: null | string;
    thumbnail?: null | string;
    images?: null | string[];
}


export interface ProductListDto {
    products: ProductDto[];
    total: number;
}
  