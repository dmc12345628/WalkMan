import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {MoveWalkManProvider} from "../../providers/move-walk-man/move-walk-man";
import {DeviceMotionAccelerationData} from "@ionic-native/device-motion";

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
  direction: string = ''

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private moveWalkManProvider: MoveWalkManProvider) {
    this.username = navParams.get('username')
    this.moveWalkManProvider.setUsername(this.username)
  }

  ionViewDidLoad() {
    if (this.platform.is('android')) {
      /*setInterval(() => {
        this.moveWalkManProvider.getCurrentAcceleration(acceleration => {
          console.log(acceleration)
          let x = acceleration.x
          let y = acceleration.y

          if (y < 4)
            this.onMove('up')
          else if (y > 8)
            this.onMove('down')
          else if (x > 0)
            this.onMove('left')
          else
            this.onMove('right')
        })
      }, 1000)*/

      this.moveWalkManProvider.watchAcceleration(acceleration => {
        let x = acceleration.x
        let y = acceleration.y

        if (y < 4)
          this.onMove('up')
        else if (y > 8)
          this.onMove('down')
        else if (x > 0)
          this.onMove('left')
        else
          this.onMove('right')

      })
    }
  }

  onMove(direction) {
    this.moveWalkManProvider.moveWalkMan(direction)
  }

  getAction() {
    return this.moveWalkManProvider.getAction()
  }

  getDate(ts) {
    if (typeof ts === 'number') {
      let date = new Date(ts)
      return date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds() + ' ' + date.getUTCDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCFullYear()
    }
    else
      return ''
  }
}
