import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestSsfUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestSSFUsers {

  constructor(public http: Http) {
    console.log('Hello RestSSFUsers Provider');
  }

  baseUrl = 'https://strongloop-backend-jleatherman92.c9users.io:8080/api/'
  path = 'SSFUsers/'

  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  
  login(credentials) {
    return this.http.post(
      this.baseUrl + this.path + 'login',
      credentials
    );
  }
}
