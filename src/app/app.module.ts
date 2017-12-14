import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ControlsPage} from "../pages/controls/controls";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MoveWalkManProvider} from '../providers/move-walk-man/move-walk-man';
import {HttpClientModule} from "@angular/common/http";
import {LogPage} from "../pages/log/log";
import { GetLogWalkManProvider } from '../providers/get-log-walk-man/get-log-walk-man';

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
    GetLogWalkManProvider
  ]
})
export class AppModule {
}
