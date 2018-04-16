import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { RutaPerfilPage } from '../ruta-perfil/ruta-perfil';
import { DataService } from '../../services/datos.service';
import { Observable } from "rxjs"

declare var google;
@Component({
  selector: 'perfil-home',
  templateUrl: 'perfil.html'
})
export class perfilPage {

  @ViewChild('map') mapElement: ElementRef;
  perfil:any;
  observable:any;
  map: any;
  constructor(public navCtrl: NavController,public bd:DataService) {
    this.observable = this.bd.getUser("bclO18rIZe5BxvH39wfE")
    this.observable.map(res => {
      this.perfil = res;
    }).subscribe();
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
