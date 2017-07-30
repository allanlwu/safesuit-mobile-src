import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SafetyPage } from '../pages/safety/safety';
import { FearPage } from '../pages/fear/fear';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6ebd9eb9'
  }
};

@NgModule({
  declarations: [
    MyApp,
    SafetyPage,
    FearPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SafetyPage,
    FearPage,
    HomePage,
    TabsPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
