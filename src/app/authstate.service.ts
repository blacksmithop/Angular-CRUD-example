import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthstateService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    // return this.loggedIn.asObservable();
    if(localStorage.getItem('token'))
      this.loggedIn.next(true);
    else
        this.loggedIn.next(false);
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router) { }

  isAuthorized(){
    return (localStorage.getItem("token") != null)
  }
  
  login(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }
  
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['']);
  }
}
