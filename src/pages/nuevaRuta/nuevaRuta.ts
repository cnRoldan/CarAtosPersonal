import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-nuevaRuta',
  templateUrl: 'nuevaRuta.html'
})
export class nuevaRutaPage {

   @ViewChild('map') mapElement: ElementRef;
   map: any;


   constructor(public navCtrl: NavController) {

   }

   ionViewDidLoad(){
     this.loadMap();
   }

   loadMap(){


     let origeLng = new google.maps.LatLng(28.241449902908233, -16.837590280950963);
     let destinoLng = new google.maps.LatLng(28.126584746441665, -16.56268612105714);
     const TRAVELMODE='DRIVING';

     let mapOptions = {
       center: origeLng,
       zoom: 10,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }

     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let directionsService:any=new google.maps.DirectionsService;

     directionsService.route({
        origin: origeLng,
        destination: destinoLng,
        travelMode: google.maps.TravelMode[TRAVELMODE]
      });

   }




}
