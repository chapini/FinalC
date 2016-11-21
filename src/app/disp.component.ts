import { Component} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import { LavaComponent } from './dispos/lava.component';
import { TvComponent } from './dispos/tv.component';
import { DataService } from './data.service';


@Component({
  selector: 'disp',
  templateUrl: './disp.component.html'
})
export class DispComponent {

d1: any;
d2: any;
d3: any;
d4: any;

  constructor(private ds: DataService) {
this.d1 = this.ds.lava;
this.d2 = this.ds.tv;
this.d3 = this.ds.clima;
this.d4 = this.ds.tv;

  }


  


}
