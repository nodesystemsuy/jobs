import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../servicios/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private Token: any;
  constructor(private AuthService: SessionService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.Token = this.AuthService.getItem(SessionService.STRING_TOKEN);
    if (this.Token) {
      return true;
    } else {
      this.router.navigate(['modules/home']);
      return false;
    }
  }
}
