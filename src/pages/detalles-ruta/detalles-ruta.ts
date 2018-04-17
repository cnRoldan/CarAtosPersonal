import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Day } from '../../classes/Day';
import { DataService } from '../../services/datos.service';
import { Observable } from "rxjs"
import { Ruta } from '../../classes/Ruta';
import { forEach } from '@firebase/util';


@IonicPage()
@Component({
  selector: 'page-detalles-ruta',
  templateUrl: 'detalles-ruta.html',
})
export class DetallesRutaPage {
  ruta:Ruta;
  plazasO:Array<number> = [0,1,2,3,4];
  plazasL:Array<number> = [0,1,2,3,4];
  observable:any;
  
  selected:string="L";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public bd:DataService) {
    
    this.observable = this.bd.getRuta("0jMBboeJTwBXK9D1eJUg")
      this.observable.map(res => {
        this.ruta = res;
        for (let i = 0; i < this.ruta.ocupantes; i++) {
          this.plazasL.splice(0, 1);
        }
        for (let i = 0; i < 5 - this.ruta.ocupantes; i++) {
          this.plazasO.splice(0, 1);
        }
      }).subscribe();

      
 
  }

  prueba(){
    console.log(this.plazasO);
    console.log(this.plazasL);
    console.log(this.ruta);
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetallesRutaPage');
  }

}
