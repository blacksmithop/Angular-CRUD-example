import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProductComponent } from './product/product.component'
import { IsauthGuard } from './isauth.guard'
const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'product', component: ProductComponent, canActivate: [IsauthGuard] },
  { path: '', component: DashboardComponent, canActivate: [IsauthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
