import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Day } from '../../classes/Day';
import { DataService } from '../../services/datos.service';
//import { Ruta } from '../../interfaces/ruta.interface';
import { Observable } from "rxjs"
import { Ruta } from '../../classes/Ruta';
import { forEach } from '@firebase/util';


@IonicPage()
@Component({
  selector: 'page-detalles-ruta',
  templateUrl: 'detalles-ruta.html',
})
export class DetallesRutaPage {
  items:any;

  observable:any;
  
  selected:string="L";

  lunes = new Day("L");
  martes = new Day("M");
  miercoles = new Day("X");
  jueves = new Day("J");
  viernes = new Day("V");

  diasSemana:Day[] = [
    this.lunes,
    this.martes,
    this.miercoles,
    this.jueves,
    this.viernes
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public bd:DataService) {
    this.observable = this.bd.getRuta("B4UoQxGQ4UbHSTQOZXBU")
    this.observable.map(res => {
      this.items = res;
    }).subscribe();
  }
  prueba(){
    console.log(this.items.nombre);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesRutaPage');
  }

}
