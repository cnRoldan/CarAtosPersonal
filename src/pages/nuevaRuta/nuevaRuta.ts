import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Day } from '../../classes/Day';

@Component({
  selector: 'page-nuevaRuta',
  templateUrl: 'nuevaRuta.html'
})
export class nuevaRutaPage {
  selected:string="L";
  dias:string[]=["L","M","X","J","V"];

   constructor(public navCtrl: NavController) {

   }





}
