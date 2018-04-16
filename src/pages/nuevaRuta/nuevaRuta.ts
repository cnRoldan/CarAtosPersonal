import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Day } from '../../classes/Day';
import { Ruta } from '../../classes/Ruta'
import { DataService } from '../../services/datos.service'

import { Geolocation } from '@ionic-native/geolocation';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'page-nuevaRuta',
  templateUrl: 'nuevaRuta.html'
})
export class nuevaRutaPage implements OnInit {

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

  ruta: Ruta = new Ruta("", "", 1, "Usuarios/eXcFeUe460gAqRYQBVQl", 1, "", "", this.diasSemana);

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(public navCtrl: NavController, public _dataService: DataService, private geolocation: Geolocation, private mapsApiLoadeR: MapsAPILoader, private ngZone: NgZone) {

  }

  ngOnInit() {
    //Setear los parametros por defecto 
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //Crear el search 
    this.searchControl = new FormControl();


    //Setear la posicion Current
    this.setCurrentPosition();

    this.mapsApiLoadeR.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //Obtener el resultado del lugar
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //Verificar el resultado 
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //Setear la latitud y la longitud, y el zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      })
    }
  }

  crearRuta() {
    this._dataService.setRutas(JSON.parse(JSON.stringify(this.ruta)));
    this.navCtrl.pop();
    console.log("Se ha creado correctamente la Ruta: ")
    console.log(this.ruta);
  }




}
