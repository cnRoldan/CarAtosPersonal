import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class DataService {
  private rutas:AngularFirestoreCollection<any>;
  private users:AngularFirestoreCollection<any>;  
  constructor(
    public db:AngularFirestore
  ) {
    this.rutas = db.collection('/Rutas');
    this.users = db.collection('/Usuarios');
  }
  
  getRuta(id:string){
    return this.rutas.doc(id).valueChanges();
  }
  getRutas(){
    return this.rutas.valueChanges();
  }
  getUser(id:string){
    return this.users.doc(id).valueChanges();
  }
  getUsers(){
    return this.users.valueChanges();
  }
  getUserRutes(userId:string){
    return this.db.collection('/Rutas', ref =>{
      return ref.where("owner","==",userId)
    }).valueChanges();
  }
  setUser(item:any){
    this.users.add(item);
  }
  setRutas(item:any){
    this.rutas.add(item);
  }
}