import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ControlsPage} from "../controls/controls";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = ''

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  onAccept() {
    if (this.username.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Invalid username',
        subTitle: 'You need to write a username.',
        buttons: ['ACCEPT']
      })
      alert.present()
    } else {
      this.navCtrl.push(ControlsPage, {
        username: this.username
      })
    }
  }
}
