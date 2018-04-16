import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Day } from '../../classes/Day';
import { Ruta } from '../../classes/Ruta'
import { DataService } from '../../services/datos.service'

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

  ruta:Ruta=new Ruta("","",1,"Usuarios/eXcFeUe460gAqRYQBVQl",1,"","",this.diasSemana);

   constructor(public navCtrl: NavController,public _dataService:DataService) {

   }

   crearRuta(){
     this._dataService.setRutas(JSON.parse(JSON.stringify(this.ruta)));
     this.navCtrl.pop();
     console.log("Se ha creado correctamente la Ruta: ")
    console.log(this.ruta); 
   }




}
