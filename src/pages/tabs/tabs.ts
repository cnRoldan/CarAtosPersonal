import { Component } from '@angular/core';

import { perfilPage } from '../perfil/perfil';
import { nuevaRutaPage } from '../nuevaRuta/nuevaRuta';
import { RutasPage } from '../rutas/rutas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = perfilPage;
  tab2Root = RutasPage;
  tab3Root = nuevaRutaPage;

  constructor() {

  }
}
