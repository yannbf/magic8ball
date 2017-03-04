import { ResultPage } from '../result/result';
import { GiphyProvider } from '../../providers/giphy';
import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  question: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public giphy: GiphyProvider) {
  }

  askQuestion() {
    this.giphy.getRandomGif().subscribe(url => {
      let params = {
        gif: url,
        question: this.question
      };

      let modal = this.modalCtrl.create(ResultPage, params);
      modal.present();

      this.question = "";
    });
  }

}
