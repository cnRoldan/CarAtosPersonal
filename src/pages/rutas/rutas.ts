import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesRutaPage } from '../detalles-ruta/detalles-ruta';
import { nuevaRutaPage } from '../nuevaRuta/nuevaRuta';

@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html'
})
export class RutasPage {
  static navCtrl: any;

  rutaPrueba :Object = {
    nombre:'Pochinki',
    recorrido: 'Adeje - Punta Anaga Alta',
    distancia: '(22 km)'
  }

  // html = '<div class="box">\
  //               <div class="container-1">\
  //                 <span class="icon"><i class="fa fa-search"></i></span>\
  //                 <input type="search" id="search" placeholder="Search..." />\
  //               </div>\
  //             </div>';


  constructor(public navCtrl: NavController) {

  }

  search(elem) {
  // elem.outerHTML = this.html;
  // console.log("Holaaaaa");
  }

  onClickedItem(ruta){
    console.log(ruta);
    this.navCtrl.push(DetallesRutaPage);
  }

  nuevaRuta(){
    this.navCtrl.push(nuevaRutaPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
