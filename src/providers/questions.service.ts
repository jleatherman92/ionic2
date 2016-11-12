import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Questions } from '../app/questions.json';


/*
  Generated class for the Providers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuestionsDataService {
  private questionsUrl = "https://strongloop-backend-jleatherman92.c9users.io/api/Questions";

  constructor(public http: Http) {
    console.log('Hello Providers QuestionsDataService');
  }
    // getQuestions(): Observable<Questions[]> {
    //   return this.http.get(this.questionsUrl);
    //   .map(response: Response) => <Questions[]>response.json().data;
    // }
}
