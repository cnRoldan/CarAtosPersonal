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
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
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
    TabsPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
