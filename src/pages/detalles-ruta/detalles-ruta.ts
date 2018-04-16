import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Day } from '../../classes/Day';


@IonicPage()
@Component({
  selector: 'page-detalles-ruta',
  templateUrl: 'detalles-ruta.html',
})
export class DetallesRutaPage implements OnInit{

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

    this.lunes._horaLl = "21:00";
    this.martes._horaLl = "21:00";
    this.miercoles._horaLl = "22:00";
    this.jueves._horaLl="22:00";
    this.viernes._horaLl="15:00";
  }

  ngOnInit(){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesRutaPage');
  }

}
