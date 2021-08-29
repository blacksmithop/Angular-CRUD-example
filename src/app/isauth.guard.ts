import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthstateService } from './authstate.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsauthGuard implements CanActivate {
  constructor(private authService: AuthstateService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['auth']);
          return false;
        }
        return true;
      })
    );
  }

}
