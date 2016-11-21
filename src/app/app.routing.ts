import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

import {DispComponent} from './disp.component';
import { AuthGuard } from './auth.guard';
import { TVTBComponent } from './tablas/tvtb.component';
import { LavaTBComponent } from './tablas/lavatb.component';
import { ClimaTBComponent } from './tablas/climatb.component';

import { RefriTBComponent } from './tablas/refritb.component';





const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
     {path: 'benchtv', component: TVTBComponent,canActivate: [AuthGuard]},
       {path: 'benchclima', component: ClimaTBComponent,canActivate: [AuthGuard]},
         {path: 'benchlava', component: LavaTBComponent,canActivate: [AuthGuard]},
          {path: 'benchrefri', component: RefriTBComponent,canActivate: [AuthGuard]},
       {path: 'disp', component: DispComponent,canActivate: [AuthGuard]},
    
          

      
 
];

export const routing = RouterModule.forRoot(APP_ROUTES);
