import { Component } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DataService } from '../data.service';



@Component({
  selector: 'lavatb',
  templateUrl: 'lavatb.component.html'
})
export class LavaTBComponent{
 items: FirebaseListObservable<any>;
midisp: FirebaseObjectObservable<any>;



  constructor(private _data: DataService) {
    this. items = this._data.benchLava;
    this.midisp = this._data.lavaDisp;
  }
filterLmarca(){
this.items= this._data.benchLavamarca;

}
filterLkilo(){
this.items= this._data.benchLavakilo;

}

filterLconsumo(){
this.items= this._data.benchLava;

}



}

