import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User {
  name:string;
  email:string;

  constructor(name:string, email:string){
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  public login (credentials){
    if (credentials.email === null || credentials.password === null){
      return Observable.throw("Por favor inserte credenciales");
    }else{
      return Observable.create(observer => {
        //Aquí creamos una respuesta al backend para hacer un chequeo real
        let access = (credentials.password === "admin" && credentials.email === "admin");
        this.currentUser = new User('admin', 'admin');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register (credentials) {
    if (credentials.email === null || credentials.password === null){
      return Observable.throw("Por favor inserte unas credenciales");
    }else{
      return Observable.create ( observer =>{
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }






  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider, este console log me tiene loco ya....');
  }

}
