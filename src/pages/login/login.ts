import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { RestSSFUsers } from '../../providers/rest-ssf-users';



/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public SSFUsersRest: RestSSFUsers) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }
  
  user = {
      email: "joedoe@aol.com",
      password: "password"
  };
  
   login(form) {
    if(form.invalid) 
      return alert("Please fill in all of the required fields.");

    this.SSFUsersRest.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      alert("Incorrect login");
    });
  }
}

  
//     login() {
//       console.log("some stuff");
//     this.navCtrl.push(LobbyPage);
//   }
  
//       signupForm = function(form) { 
//         if(form.invalid) return alert("Please complete the form before proceeding.");
// }

// }
