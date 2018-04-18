import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { RutaPerfilPage } from '../ruta-perfil/ruta-perfil';
import { DataService } from '../../services/datos.service';

declare var google;
@Component({
  selector: 'perfil-home',
  templateUrl: 'perfil.html'
})
export class perfilPage {

  @ViewChild('map') mapElement: ElementRef;
  datosUsuario:any;
  datosUsuarioObv:any;
  map: any;
  userRutesObv:any;
  userRutes:any;
  
  constructor(public navCtrl: NavController,public bd:DataService) {

    this.datosUsuarioObv = this.bd.getUser("bclO18rIZe5BxvH39wfE")
    this.datosUsuarioObv.map(respuesta => {
      this.datosUsuario = respuesta;
    }).subscribe();
    //esto devuelve las rutas del usario que le pases al medoto getUserRutes(iduser)
    this.userRutesObv = bd.getUserRutes('bclO18rIZe5BxvH39wfE');
    this.userRutesObv.map(res => {
      this.userRutes = res;
    }).subscribe();
   
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
