import { Component} from "@angular/core";
import {AngularFire, FirebaseObjectObservable,FirebaseAuth} from 'angularfire2';




@Component({
  selector: 'tv',
  templateUrl: 'tv.component.html'
})
export class TvComponent {
    item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire){
    this.item = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/-KWl31QTGQOtULkB9P50'); 
      
  }



  }

  

