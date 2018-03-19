import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Result } from '../../models/user';

/**
 * Generated class for the ModalePersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modale-persona',
  templateUrl: 'modale-persona.html',
})
export class ModalePersonaPage {

  persona: Result;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController) {
    this.persona = this.navParams.get('persona');
    alert(this.persona.gender);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalePersonaPage');
  }

  esci() {
    this.viewCtrl.dismiss();
  }

}
