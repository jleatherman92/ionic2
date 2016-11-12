import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//states
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionsPage } from '../pages/questions/questions';
import { ResultsPage } from '../pages/results/results';

//rest services
import { RestSSFUsers } from '../providers/rest-ssf-users';


// import { Http } from '@angular/http';
// import { NavController } from 'ionic-angular';


//import { QuestionsDataService } from '../providers/questions.service';
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';

const injections = [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage,
    LobbyPage,
    QuestionsPage,
    ResultsPage
  ]


@NgModule({
  declarations: injections, 
  
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [RestSSFUsers
    ]
})
export class AppModule {}
