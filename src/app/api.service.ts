import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {
  }

  register(data: any) {
    return this.http.post(`${BASE_URL}/users`, data)
  }

  login(data: any) {
    return this.http.post(`${BASE_URL}/login`, data)
  }

  users(token: any) {
    const headers = { 'Authorization': `Contacts ${localStorage.getItem('token')}` };
    return this.http.get(`${BASE_URL}/users`, { headers })
  }
}
