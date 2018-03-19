import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Result } from '../../models/user';
import { PeopleProvider } from '../../providers/people/people';
import { DettaglioPersonaPage } from '../dettaglio-persona/dettaglio-persona';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  persone: Result[];
  constructor(public navCtrl: NavController,
              private randomUserService: PeopleProvider,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: 'Getting lastest entries ...'
    });
    loader.present();
    this.randomUserService.getRandomUsers().subscribe(users => {
      this.persone = users.results;
      loader.dismiss();
    });
  }

  dettaglioPersona(persona: Result){
    this.navCtrl.push(DettaglioPersonaPage, {
      persona: persona
    });
  }

}
