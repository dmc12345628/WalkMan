import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetLogWalkManProvider {
  url: string = 'http://perette2.univ-lr.fr/logs'

  constructor(public http: HttpClient) {
  }

  getLog(callback) {
    console.log(this.url)
    this.http.get(this.url).subscribe(data => {
      callback(data)
    }, err => {
      console.log(err)
    })
  }
}
