import { Component } from '@angular/core';
import { NavController, Form } from 'ionic-angular';
import { DetallesRutaPage } from '../detalles-ruta/detalles-ruta';
import { nuevaRutaPage } from '../nuevaRuta/nuevaRuta';



@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html'
})
export class RutasPage implements OnInit {
  static navCtrl: any;

  rutaPrueba: Object = {
    nombre: 'Pochinki',
    recorrido: 'Adeje - Punta Anaga Alta',
    distancia: '(22 km)'
  }

  constructor(public navCtrl: NavController) {



  }

  ngOnInit() {

  }





  onClickedItem(ruta) {
    console.log(ruta);
    this.navCtrl.push(DetallesRutaPage);
  }

  nuevaRuta() {
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
