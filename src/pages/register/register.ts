import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { RestSSFUsers } from '../../providers/rest-ssf-users';
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

  constructor(public navCtrl: NavController,
              public SSFUsersRest: RestSSFUsers) {}
  
  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }
  
    user = {};
    
    register(form) {
      if(form.invalid) 
        return alert("Please fill in all of the required fields.");
    
    this.SSFUsersRest.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      alert("Please complete the form before proceeding.");
    });
  }

}
  
//   register() {
//   this.navCtrl.push(LobbyPage);
// }

//     signupForm = function(form) { 
//         if(form.invalid) return alert("Please complete the form before proceeding.");
// }
// }