import { Component, Inject} from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods , FirebaseAuth} from 'angularfire2';
import {MaterializeDirective} from "angular2-materialize";

import { AuthService } from "./auth.service";

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService,@Inject(FirebaseAuth) public auth: FirebaseAuth   ) {
    

  }
  loginG() {
     this.authService.loginGoogle();}
     
     loginF() {
    this.authService.loginFB();
     }
  
      

}


