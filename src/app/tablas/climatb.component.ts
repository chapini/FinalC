import { Component } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DataService } from '../data.service';



@Component({
  selector: 'ctb',
  templateUrl: 'climatb.component.html'
})
export class ClimaTBComponent{
 items: FirebaseListObservable<any>;
midisp: FirebaseObjectObservable<any>;



  constructor(private _data: DataService) {
    this. items = this._data.benchClima;
    this.midisp = this._data.climaDisp;
  }
filterCmarca(){
this.items= this._data.benchClimamarca;

}
filterCbtu(){
this.items= this._data.benchClimabtu;

}

filterCconsumo(){
this.items= this._data.benchClima;

}




}

