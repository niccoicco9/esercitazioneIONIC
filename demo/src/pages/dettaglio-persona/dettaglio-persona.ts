import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Result } from '../../models/user';
import { ModalePersonaPage } from '../modale-persona/modale-persona';

/**
 * Generated class for the DettaglioPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettaglio-persona',
  templateUrl: 'dettaglio-persona.html',
})
export class DettaglioPersonaPage {

  private persona: Result;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private toastCtrl: ToastController,
              private modalCtrl: ModalController) {
    this.persona = this.navParams.get('persona');
  }

  ionViewDidLoad() {

  }

  mostraDOB(){
    let toast = this.toastCtrl.create({
      message: this.persona.dob,
      duration: 3000
    });
    toast.present();
  }

  mostraModale() {
    let modal = this.modalCtrl.create(ModalePersonaPage, {
      persona: this.persona
    });
    modal.present();
  }

}
