import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { Day } from '../../classes/Day';
import { Ruta } from '../../classes/Ruta'
import { DataService } from '../../services/datos.service'

// AUTOCOMPLETE PACKAGE
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'page-nuevaRuta',
  templateUrl: 'nuevaRuta.html'
})
export class nuevaRutaPage implements OnInit {
  i:number = 0;

  selected: string = "L";
  lunes = new Day("L");
  martes = new Day("M");
  miercoles = new Day("X");
  jueves = new Day("J");
  viernes = new Day("V");
  diasSemana: Day[] = [
    this.lunes,
    this.martes,
    this.miercoles,
    this.jueves,
    this.viernes
  ];

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  // @ViewChild("search")
  // public searchElementRef: ElementRef;


  constructor(public navCtrl: NavController, public _dataService: DataService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private toastCtrl: ToastController) {

  }

  ruta: Ruta = new Ruta(this.latitude, this.longitude, "", "", 0, "bclO18rIZe5BxvH39wfE", 1, "", "", this.diasSemana);


  ngOnInit() {
    //set google maps defaults
    this.latitude;
    this.longitude;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    // this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let fieldElement = document.getElementById('autocompleteField').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(fieldElement, {
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          console.log(place);
          //SETEO A LA RUTA LOS NUEVOS PARAMS OBTENIDOS DEL AUTOCOMPLETE
          this.ruta.setOrigen = place.name;
          this.ruta.setLong = this.longitude;
          this.ruta.setLati = this.latitude;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  crearRuta() {
    this._dataService.setRutas(JSON.parse(JSON.stringify(this.ruta)));
    this.navCtrl.pop();
    console.log("Se ha creado correctamente la Ruta: ")
    console.log(this.ruta);
  }

  autocompletarHorarios() {
    if (this.diasSemana[0].getHoraLl!= null && this.diasSemana[0].getHoraS != null && this.i==0) {
      this.diasSemana.forEach(dia => {
        dia.setHoraLl = this.diasSemana[0].getHoraLl;
        dia.setSalidaS = this.diasSemana[0].getHoraS;
      });
      this.i++;
      this.presentToast();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '¡Horarios autocompletados!',
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}



