import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { nuevaRutaPage } from '../nuevaRuta/nuevaRuta';



@Component({
  selector: 'page-noti',
  templateUrl: 'noti.html'
})
export class NotiPage {


  constructor(public navCtrl: NavController) {

  }

  nuevaRuta(){
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
