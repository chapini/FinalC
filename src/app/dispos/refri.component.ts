import { Component} from "@angular/core";
import {AngularFire, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';




@Component({
  selector: 'refri',
  templateUrl: 'refri.component.html'
})
export class RefriComponent {
    item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire){
    this.item = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/-KWl31QTGQOtULkB9P50'); 
      
  }



  }

  

