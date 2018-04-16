import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class DataService {
  private rutas:AngularFirestoreCollection<any>;
  constructor(
    public db:AngularFirestore
  ) {
    this.rutas = db.collection('/Rutas');
  }
  
  getRuta(id:string){
    return this.rutas.doc(id).valueChanges();
  }
  getRutas(){
    return this.rutas.valueChanges();
  }
  setRutas(item:any){
    this.rutas.add(item);
  }
}