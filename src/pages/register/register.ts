import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
// import { RegisterPage } from '../register/register';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }
  
  //     login() {
  //   this.navCtrl.push(lobbyPage);
  // }

}
