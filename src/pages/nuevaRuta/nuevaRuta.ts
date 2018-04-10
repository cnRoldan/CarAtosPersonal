import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 import { Day } from '../../classes/Day';

@Component({
  selector: 'page-nuevaRuta',
  templateUrl: 'nuevaRuta.html'
})
export class nuevaRutaPage {


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

   constructor(public navCtrl: NavController) {

   }





}
