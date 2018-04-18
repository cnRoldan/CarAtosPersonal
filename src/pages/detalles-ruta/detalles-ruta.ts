import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Day } from '../../classes/Day';
import { DataService } from '../../services/datos.service';
import { Observable } from "rxjs"
import { Ruta } from '../../classes/Ruta';
import { forEach } from '@firebase/util';

//Loading
import { LoadingController } from 'ionic-angular';


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
  

  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bd:DataService, public loadingCtrl:LoadingController) {
    //Llamada del método Loading
    this.presentLoading();

    this.observable = this.bd.getRuta("0jMBboeJTwBXK9D1eJUg")
      this.observable.map(res => {
        this.ruta = res;
        for (let i = 0; i < this.ruta.getOcupantes; i++) {
          this.plazasL.splice(0, 1);
        }
        for (let i = 0; i < 5 - this.ruta.getOcupantes; i++) {
          this.plazasO.splice(0, 1);
        }
        this.loader.dismiss();
      }).subscribe();

      
 
  }

  //Método para llamar al Loading
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando ruta",
    });
    this.loader.present();    
  }

  prueba(){
    console.log(this.plazasO);
    console.log(this.ruta.getOcupantes);
    console.log(this.ruta);
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetallesRutaPage');
  }

}
