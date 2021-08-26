import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private source = interval(3000);

  constructor(private http: HttpClient) { 
    /*
    this.source.subscribe(() => {
      this.http
        .get('http://localhost:8080/status', { observe: 'response' })
        .pipe(first())
        .subscribe(
          resp => {
            if (resp.status === 200) {
              console.log(true);
            } else {
              console.log(false);
            }
          },
          err => console.log(err.status)
        );
    });*/
  }



  register(data: any) {
    return this.http.post(`${BASE_URL}/users`, data)
  }

  login(data: any) {
    return this.http.post(`${BASE_URL}/login`, data)
  }

  users(token: any) {
    let httpHeaders = new HttpHeaders()
    httpHeaders.set("Authorization", `Contacts ${token}`)

    return this.http.get(`${BASE_URL}/users`, { headers: httpHeaders })
  }
}
