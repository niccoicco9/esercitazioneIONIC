import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../../models/user';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  credenziali: Login = new Login();
  constructor(public navCtrl: NavController) {
    this.credenziali.username = 'pippo';
    this.credenziali.password = '';
  }

  tornaAdHome() {
    this.navCtrl.push(HomePage,{
      credenziali: this.credenziali
    });
  }

}
