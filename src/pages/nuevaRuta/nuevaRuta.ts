import { Component } from '@angular/core';
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

  ruta: Ruta = new Ruta("", "", 1, "Usuarios/eXcFeUe460gAqRYQBVQl", 1, "", "", this.diasSemana);

  constructor(public navCtrl: NavController, public _dataService: DataService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {

  }



  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

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
      });
    }
  }

  crearRuta() {
    this._dataService.setRutas(JSON.parse(JSON.stringify(this.ruta)));
    this.navCtrl.pop();
    console.log("Se ha creado correctamente la Ruta: ")
    console.log(this.ruta);
  }




}
