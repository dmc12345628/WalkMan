import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GetLogWalkManProvider} from "../../providers/get-log-walk-man/get-log-walk-man";

@Component({
  selector: 'page-list',
  templateUrl: 'log.html'
})
export class LogPage {
  //selectedItem: any;
  icons: string[]
  logOrderByUsername: any
  logOrderByTimestamp: any
  log: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private getLogWalkMan: GetLogWalkManProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    this.log = 'timestamp'

    this.getLogWalkMan.getLog(data => {
      this.logOrderByUsername = data.slice(0, 10).sort((a, b) => {
        if (a.username.toLocaleLowerCase() < b.username.toLocaleLowerCase()) return -1
        if (a.username.toLocaleLowerCase() > b.username.toLocaleLowerCase()) return 1
        return 0
      })
      console.log(typeof this.logOrderByUsername)

      this.logOrderByTimestamp = data.slice(0, 10).sort((a, b) => {
        return b.ts - a.ts
      })
      console.log(typeof this.logOrderByTimestamp)
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(LogPage, {
      item: item
    });
  }

  getDate(ts) {
    let date = new Date(ts)
    return date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds() + ' ' + date.getUTCDate() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCFullYear()
  }
}
