import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DeviceMotion} from "@ionic-native/device-motion";

@Injectable()
export class MoveWalkManProvider {
  url: string = 'http://perette2.univ-lr.fr/action'
  username: string = ''
  action: any = {
    direction: '',
    ts: ''
  }
  accelerationSubscription: any

  constructor(public http: HttpClient, private deviceMotion: DeviceMotion) {
  }

  setUsername(username) {
    this.username = username
  }

  moveWalkMan(direction) {
    this.action.direction = direction
    let jsonData = {"username": this.username, "type": direction};

    this.http.post(this.url, jsonData).subscribe(data => {
      this.action.ts = data['ts']
    }, err => {
      console.log(err)
    })
  }

  getAction() {
    return this.action
  }

  getCurrentAcceleration() {
    this.deviceMotion.getCurrentAcceleration()
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
