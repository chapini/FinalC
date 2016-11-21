import { Component , Inject} from "@angular/core";
import {AngularFire, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  user:any;

  constructor( @Inject(FirebaseAuth) public auth: FirebaseAuth, private authserv: AuthService){
this.user = this.authserv.uid;

  }

logout(){
  this.authserv.signOut();
}

  }

  

