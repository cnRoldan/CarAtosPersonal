import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { LoginPage} from '../pages/login/login';
import { RutasPage } from '../pages/rutas/rutas';
import { nuevaRutaPage } from '../pages/nuevaRuta/nuevaRuta';
import { perfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallesRutaPage } from '../pages/detalles-ruta/detalles-ruta'
import { RutaPerfilPage } from '../pages/ruta-perfil/ruta-perfil';
import { NotiPage } from '../pages/noti/noti';

// Ionic Rating
import { Ionic2RatingModule } from "ionic2-rating";


// Geolocation providers
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    RutasPage,
    perfilPage,
    nuevaRutaPage,
    LoginPage,
    DetallesRutaPage,
    RutaPerfilPage,
    TabsPage,
    NotiPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RutasPage,
    perfilPage,
    nuevaRutaPage,
    LoginPage,
    DetallesRutaPage,
    RutaPerfilPage,
    TabsPage,
    NotiPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
  ]
})
export class AppModule {}
