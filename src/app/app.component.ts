import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { LandingPage } from '../pages/landing/landing';
import { LobbyPage } from '../pages/lobby/lobby';

// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
// import { NavController } from 'ionic-angular';
// import { QuestionsPage } from '../pages/questions/questions';
// import { ResultsPage } from '../pages/results/results';
// import { Http } from '@angular/http';

//import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
 rootPage = window.localStorage.getItem("token") ? LobbyPage : LandingPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
