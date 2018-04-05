import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email:'admin', password: 'admin'};

  constructor(public nav: NavController, private auth:AuthServiceProvider, private alertCtrl:AlertController,private loadingCtrl: LoadingController) {
  }

  //
  // public createAccount(){
  //   this.nav.push('RegisterPage');
  // }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Espere por favor...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text){
    this.loading.dismiss();
       let alert = this.alertCtrl.create({
         title: 'Fallo',
         subTitle: text,
         buttons: ['OK']
       });
       return alert;
     }


  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        console.log("Autorized")
        this.nav.setRoot(TabsPage);
      } else {
        console.log("Denied");
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
}
