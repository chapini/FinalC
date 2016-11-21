import { Injectable, Inject } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { AuthService } from "./auth.service";
import { AngularFire, AuthProviders, AuthMethods,FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {


  public allowed: boolean;
 
  constructor(private af: AngularFire, private router: Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.auth.map((auth) =>  {
      if(auth == null) {
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }).first()
  }
}
