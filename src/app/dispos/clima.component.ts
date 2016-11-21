import { Component} from "@angular/core";
import {AngularFire, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';




@Component({
  selector: 'clima',
  templateUrl: 'clima.component.html'
})
export class ClimaComponent {
item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
 
    
    this.item = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Climas/-KWl5AjnF9QsPjQgpuse'); 
  
  }


  }

  
