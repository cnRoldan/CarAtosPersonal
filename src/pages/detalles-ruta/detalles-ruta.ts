import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Day } from '../../classes/Day';


@IonicPage()
@Component({
  selector: 'page-detalles-ruta',
  templateUrl: 'detalles-ruta.html',
})
export class DetallesRutaPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesRutaPage');
  }

}
