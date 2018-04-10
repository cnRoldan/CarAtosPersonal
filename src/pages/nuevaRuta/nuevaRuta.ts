import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Day } from '../../classes/Day';

@Component({
  selector: 'page-nuevaRuta',
  templateUrl: 'nuevaRuta.html'
})
export class nuevaRutaPage {

  // dias:string[]=["L","M","X","J","V"];

  selected:string="L";

  diasSemana: { inicial:string, salida:string, llegada:string } [] = [
    { "inicial": "L", "salida": "", "llegada":""},
    { "inicial": "M", "salida": "", "llegada":""},
    { "inicial": "X", "salida": "", "llegada":""},
    { "inicial": "J", "salida": "", "llegada":""},
    { "inicial": "V", "salida": "", "llegada":""},
  ];

   constructor(public navCtrl: NavController) {

   }





}
