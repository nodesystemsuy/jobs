import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../servicios/session.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  private Token: any;
  constructor(private AuthService: SessionService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.Token = this.AuthService.getItem(SessionService.STRING_TOKEN);
    if (this.Token) {
      this.router.navigate(['modules/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
