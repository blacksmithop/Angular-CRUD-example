import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { IsauthGuard } from './isauth.guard'
const routes: Routes = [
  {path: 'auth',component: AuthComponent},
  {path: 'dashboard',component: DashboardComponent, canActivate : [IsauthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
