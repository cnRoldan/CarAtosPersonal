
He instalado este paquete para firebase:
npm install angularfire2 firebase --save

// importar datos
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/datos.service';
import { Observable } from '@firebase/util';

/**
 * Generated class for the RutaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ruta-perfil',
  templateUrl: 'ruta-perfil.html',
})
export class RutaPerfilPage {
  items:any;
  dia:object = {
    horaLl: "12",
    horaS: "11",
    nombre: "lunes"
  };
  semana: object = {
    dia: this.dia
  };
  prueba: object = {
    destino: "hola",
    nombre: "charly",
    ocupantes: 1,
    owner: "Usuarios/eXcFeUe460gAqRYQBVQl",
    plazas: 4,
    salida: "me da igual",
    semana: this.semana
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataService) {
    
  }
  
  mostrar(){
    this.items = this.data.getRutas();
  }
  agregar(){
    this.data.setRutas(this.prueba);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RutaPerfilPage');
  }

}

// llamar datos html
<ul>
      <li *ngFor="let item of items | async">{{ item.semana | json }}</li>
</ul>