import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  gif: any;
  question: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.gif = navParams.get('gif');
    this.question = navParams.get('question');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
