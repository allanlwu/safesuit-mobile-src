import { Component } from '@angular/core';

import { SafetyPage } from '../safety/safety';
import { FearPage } from '../fear/fear';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SafetyPage;
  tab3Root = FearPage;

  constructor() {

  }
}
