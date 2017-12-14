import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DeviceMotion, DeviceMotionAccelerationData} from "@ionic-native/device-motion";

@Injectable()
export class MoveWalkManProvider {
  url: string = 'http://perette2.univ-lr.fr/action'
  username: string = ''
  action: any = {
    direction: '',
    ts: ''
  }
  accelerationSubscription: any
  actionInCours: boolean = false

  constructor(public http: HttpClient, private deviceMotion: DeviceMotion) {
  }

  setUsername(username) {
    this.username = username
  }

  moveWalkMan(direction) {
    if (!this.actionInCours) {
      this.actionInCours = true
      this.action.direction = direction
      let jsonData = {"username": this.username, "type": direction}

      this.http.post(this.url, jsonData).subscribe(data => {
        this.action.ts = data['ts']
        setTimeout(() => {
          this.actionInCours = false
        }, 1000)
      }, err => {
        console.log(err)
      })
    }
  }

  getAction() {
    return this.action
  }

  getCurrentAcceleration(callback) {
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => {
        callback(acceleration)
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  watchAcceleration(callback) {
    this.accelerationSubscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      callback(acceleration)
    })
  }

  stopWatch() {
    this.accelerationSubscription.unsubscribe()
  }
}
