import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { RutaPerfilPage } from '../ruta-perfil/ruta-perfil';

declare var google;
@Component({
  selector: 'perfil-home',
  templateUrl: 'perfil.html'
})
export class perfilPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  onClickedItem(){
    this.navCtrl.push(RutaPerfilPage);
  }
  loadMap(){


    let origeLng = new google.maps.LatLng(28.241449902908233, -16.837590280950963);

    let mapOptions = {
      center: origeLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
