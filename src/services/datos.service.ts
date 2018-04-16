import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private rutas:AngularFirestoreCollection<any>;
  constructor(
    public db:AngularFirestore
  ) {
    this.rutas = db.collection('/Rutas');
  }
  
  getRutas(){
    return this.rutas.valueChanges();
  }
  setRutas(item:any){
    this.rutas.add(item)
  }
}