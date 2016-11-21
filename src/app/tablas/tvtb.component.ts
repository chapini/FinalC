import { Component } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DataService } from '../data.service';



@Component({
  selector: 'tvtb',
  templateUrl: 'tvtb.component.html'
})
export class TVTBComponent{
 items: FirebaseListObservable<any>;
midisp: FirebaseObjectObservable<any>;



  constructor(private _data: DataService) {
    this. items = this._data.benchTv;
    this.midisp = this._data.currentDisp;
  }
filtermarca(){
this.items= this._data.benchTvmarca;

}
filterpulgadas(){
this.items= this._data.benchTvpulgadas;

}
filtertipo(){
this.items= this._data.benchTvtipo;

}
filterconsumo(){
this.items= this._data.benchTv;

}



}

