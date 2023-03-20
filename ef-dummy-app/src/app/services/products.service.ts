import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductDto, ProductListDto } from '../models/product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductListDto> {
    return this.http.get<ProductListDto>(`${this.apiUrl}/products`);
  }

  getProduct(id: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(product: ProductDto): Observable<ProductDto> {
    console.log('createProduct, product:', product);
    return this.http.post<ProductDto>(`${this.apiUrl}/products/add`, product);
  }

  updateProduct(productId: string, product: ProductDto): Observable<ProductDto> {
    console.log('updateProduct, product:', product);
    return this.http.put<ProductDto>(`${this.apiUrl}/products/${productId}`, product);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
  }
}