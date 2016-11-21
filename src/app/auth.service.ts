
import { AngularFire, AuthProviders, AuthMethods,FirebaseAuth } from 'angularfire2';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

declare var firebase :any;
@Injectable()
export class AuthService {
uid: any;

  constructor(public af: AngularFire ,private router: Router , private _auth: FirebaseAuth) {
    this.af.auth.subscribe(auth => console.log(auth));
    this._auth.subscribe(auth => console.log(auth));
    this.uid= this.af.auth;
   

  }

 
  public loginGoogle () {
    // This will perform popup auth with google oauth and the scope will be email
    // Because those options were provided through bootstrap to DI, and we're overriding the provider.
    this._auth.login({
      provider: AuthProviders.Google,
        method: AuthMethods.Popup
        
    });
  }

     public loginFB() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
     }
       signOut() {
        this.af.auth.logout();
          this.router.navigate(['/home']);
    }
  

}
