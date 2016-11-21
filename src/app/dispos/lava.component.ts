import { Component} from "@angular/core";
import {AngularFire, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';




@Component({
  selector: 'lava',
  templateUrl: 'lava.component.html'
})
export class LavaComponent {
item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
 
    
    this.item = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Lavadoras/-KWl3oPmedBfht-C-YsC'); 
  
  }


  }

  
