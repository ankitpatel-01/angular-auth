import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product.model';

@Injectable()
export class ProductsService {

  private apiUrl: string = "http://localhost:3000/products";

  constructor(
    private http: HttpClient
  ) { }

  
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // /**
  //  * Delete file from db
  //  * @param id 
  //  * @returns 
  //  */
  // deleteFile(id: number) {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
