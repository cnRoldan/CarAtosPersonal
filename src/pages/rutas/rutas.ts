import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesRutaPage } from '../detalles-ruta/detalles-ruta';

@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html'
})
export class RutasPage {

  rutaPrueba :Object = {
    nombre:'Pochinki',
    recorrido: 'Adeje - Punta Anaga Alta',
    distancia: '(22 km)'
  }

  constructor(public navCtrl: NavController) {

  }

  onClickedItem(ruta){
    console.log(ruta);
    this.navCtrl.push(DetallesRutaPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
