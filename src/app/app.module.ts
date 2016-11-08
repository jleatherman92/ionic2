import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NavController } from 'ionic-angular';
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage
    // AboutPage,
    // ContactPage,
    // HomePage,
    // //TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    RegisterPage
    // AboutPage,
    // ContactPage,
    // HomePage,
    // TabsPage
  ],
  providers: []
})
export class AppModule {}
