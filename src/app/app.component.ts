import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthstateService } from './authstate.service';
import { ProductmanagerService } from './productmanager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  constructor(
    public router: Router
  ) {

  }
}
