import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  token: any;

  loginForm = this.form.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(private form: FormBuilder, private api: ApiService, private router:Router) {
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
        this.router.navigateByUrl("/dashboard")
        this.token = resp;
        localStorage.setItem("token", "Contacts " + this.token.accessToken.value)
      },
      error => {
        console.log(error)

      }
    )
  }


}
