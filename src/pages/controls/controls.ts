import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MoveWalkManProvider} from "../../providers/move-walk-man/move-walk-man";

/**
 * Generated class for the ControlsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-controls',
  templateUrl: 'controls.html',
})
export class ControlsPage {
  username: string = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, private moveWalkManProvider: MoveWalkManProvider) {
    this.username = navParams.get('username')
    this.moveWalkManProvider.setUsername(this.username)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlsPage');
  }

  onMove(direction) {
    this.moveWalkManProvider.moveWalkMan(direction)
  }

  getAction() {
    return this.moveWalkManProvider.getAction()
  }
}
