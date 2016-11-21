import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home.component';
import {AngularFireModule} from 'angularfire2';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { DispComponent } from './disp.component';
import { LavaComponent } from './dispos/lava.component';
import { TvComponent } from './dispos/tv.component';
import { ClimaComponent } from './dispos/clima.component';
import { TVTBComponent } from './tablas/tvtb.component';
import { ClimaTBComponent } from './tablas/climatb.component';
import { LavaTBComponent } from './tablas/lavatb.component';

import { DataTableModule } from 'angular2-datatable';
import { DataService } from './data.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RefriComponent } from './dispos/refri.component';
import { RefriTBComponent } from './tablas/refritb.component';




export const firebaseConfig = {
  apiKey: "AIzaSyCzfTwp-r1yj0oDkId7MNm2-Zyf12kwhU8",
    authDomain: "con100t-f2921.firebaseapp.com",
    databaseURL: "https://con100t-f2921.firebaseio.com",
    storageBucket: "con100t-f2921.appspot.com",
    messagingSenderId: "263218796151"

};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DispComponent,
    LavaComponent,TvComponent, ClimaComponent,RefriComponent,
    TVTBComponent, ClimaTBComponent, LavaTBComponent, RefriTBComponent
  
  ],
  imports: [routing,
    BrowserModule,
    FormsModule,
   DataTableModule,
    HttpModule,
     ChartsModule,
MaterializeModule,
 AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard,AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
