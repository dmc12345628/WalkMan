import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MoveWalkManProvider {
  url: string = 'http://perette2.univ-lr.fr/action'
  username: string = ''
  action: any = {
    direction: '',
    date: ''
  }

  constructor(public http: HttpClient) {
    console.log('Hello MoveWalkManProvider Provider');
  }

  setUsername(username) {
    this.username = username
  }

  moveWalkMan(direction) {
    this.action.direction = direction
    let jsonData = {"username": this.username, "type": direction};

    this.http.post(this.url, jsonData).subscribe(data => {
      this.action.date = new Date(data['ts'])
    }, err => {
      console.log(err)
    })
  }

  getAction() {
    return this.action
  }
}
