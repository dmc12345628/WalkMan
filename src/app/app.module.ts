import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LogPage} from "../pages/log/log";
import {ControlsPage} from "../pages/controls/controls";

import {MoveWalkManProvider} from '../providers/move-walk-man/move-walk-man';
import {GetLogWalkManProvider} from '../providers/get-log-walk-man/get-log-walk-man';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HttpClientModule} from "@angular/common/http";
import {DeviceMotion} from "@ionic-native/device-motion";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogPage,
    ControlsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogPage,
    ControlsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoveWalkManProvider,
    GetLogWalkManProvider,
    DeviceMotion,
  ]
})
export class AppModule {
}
