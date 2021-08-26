import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthstateService } from '../authstate.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  token: any;
  loginForm = this.form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  
  registerForm = this.form.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private form: FormBuilder,
     private api: ApiService, 
     private router:Router,
     private authService : AuthstateService)
      {
    const node = document.createElement('script');
    node.src = '../../assets/js/form.js';
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
  }
  login() {
    var email = this.loginForm.value.email
    var password = this.loginForm.value.password
    var data = {
      "email": email,
      "password": password
    }
    this.api.login(data).subscribe(
      resp => {
        console.log("Here");
        //this.router.navigateByUrl("/dashboard")
        this.token = resp;
        localStorage.setItem("token", "Contacts " + this.token.accessToken.value)
        this.authService.login();
      },
      error => {
        console.log(error)

      }
    )
  }
  register() {
    var name = this.registerForm.value.name
    var email = this.registerForm.value.email
    var password = this.registerForm.value.password
    var data = {
      "name": name,
      "email": email,
      "password": password
    }
    this.api.register(data).subscribe(
      resp => {
        alert("Registered user!");
        //this.router.navigateByUrl("/auth")
      },
      error => {
        console.log(error)

      }
    )
  }


}
