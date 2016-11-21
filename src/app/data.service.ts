import {Injectable, Inject} from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {AngularFireDatabase, FirebaseRef, AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  a: FirebaseObjectObservable<any>;
lava = 'Lavadora';
tv='Television';
clima = 'Clima';

currentDisp: FirebaseObjectObservable<any>;
climaDisp: FirebaseObjectObservable<any>;
lavaDisp: FirebaseObjectObservable<any>;

benchTvmarca: FirebaseListObservable<any>;
benchTv: FirebaseListObservable<any>;


benchTvpulgadas: FirebaseListObservable<any>;
benchTvtipo: FirebaseListObservable<any>;

benchClima: FirebaseListObservable<any>;
benchClimabtu: FirebaseListObservable<any>;
benchClimamarca: FirebaseListObservable<any>;

benchLava: FirebaseListObservable<any>;
benchLavakilo: FirebaseListObservable<any>;
benchLavamarca: FirebaseListObservable<any>;



    constructor(af: AngularFire) {

        this.a = af.database.object('https://con100t-f2921.firebaseio.com/medidores/CON100T-004/dispositivos/C'); 
        this.currentDisp = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/-KWl31QTGQOtULkB9P50');
         this.climaDisp = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Climas/-KWl5AjnF9QsPjQgpuse');
            this.lavaDisp = af.database.object('https://con100t-f2921.firebaseio.com/benchmark/Lavadoras/-KWl3oPmedBfht-C-YsC');
        this.benchTvmarca = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/', {
  query: {  
    orderByChild: 'marca',
       
  
   
  }
});

    this.benchTv = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/', {
  query: {  
    orderByChild: 'consumo',
      
  
   
  }
});

 this.benchTvpulgadas = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/', {
  query: {  
    orderByChild: 'pulgadas',
      
  
   
  }
});

 this.benchTvtipo = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Televisiones/', {
  query: {  
    orderByChild: 'tipo',
    
  }
});

this.benchClima = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Climas', {
  query: {  
    orderByChild: 'consumo',
    
  }
});

this.benchClimamarca = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Climas', {
  query: {  
    orderByChild: 'marca',
    
  }
});

this.benchClimabtu = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Climas', {
  query: {  
    orderByChild: 'btu',
    
  }
});

this.benchLava = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Lavadoras', {
  query: {  
    orderByChild: 'consumo',
    
  }
});

this.benchLavakilo = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Lavadoras', {
  query: {  
    orderByChild: 'kilohramos',
    
  }
});

this.benchLavamarca = af.database.list('https://con100t-f2921.firebaseio.com/benchmark/Lavadoras', {
  query: {  
    orderByChild: 'marca',
    
  }
});



    }


    

    }

