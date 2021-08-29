import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/products';



const headers = { 'Authorization': `Contacts ${localStorage.getItem('token')}` };

@Injectable({
  providedIn: 'root'
})
export class ProductmanagerService {

  products: any
  constructor(private http: HttpClient) {
    /*this.list()
      .subscribe(data => this.products = data);*/
  }

  add(data: any) {
    console.log(data)
    return this.http.post(BASE_URL, data, { headers })
  }

  delete(productId) {
    return this.http.delete(`${BASE_URL}/${productId}`, { headers })
  }

  update(data: any, productId) {
    return this.http.put(`${BASE_URL}/${productId}`, data, { headers })
  }

  list() {
    return this.http.get<any>(BASE_URL, { headers })
  }
}
