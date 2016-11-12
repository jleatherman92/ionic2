import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsDataService } from '../providers/questions.service';

/*
  Generated class for the Questions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {

  constructor(public navCtrl: NavController) {}
  
//   ngOnInit() {
//     this.QuestionsDataService.getQuestions()
//       .subscribe(questions => this.questions = questions);
// }

  ionViewDidLoad() {
    console.log('Hello QuestionsPage Page');
  }

}
