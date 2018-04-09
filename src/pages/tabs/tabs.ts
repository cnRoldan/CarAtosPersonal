import { Component } from '@angular/core';

import { perfilPage } from '../perfil/perfil';
import { RutasPage } from '../rutas/rutas';
import { NotiPage } from '../noti/noti';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = perfilPage;
  tab2Root = RutasPage;
  tab3Root = NotiPage;

  constructor() {

  }
}
