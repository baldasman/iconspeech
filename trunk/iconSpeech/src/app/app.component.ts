<<<<<<< HEAD
import {Component, enableProdMode} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
=======
import { Component, enableProdMode } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
>>>>>>> d75381244a5fdbb1777a1a6922155645d17efa88
=======
>>>>>>> d75381244a5fdbb1777a1a6922155645d17efa88
import {AppConstants} from "./app.constants";

@Component({

  templateUrl: 'app.html'

})
export class MyApp {
<<<<<<< HEAD
<<<<<<< HEAD
=======

    protected rootPage: any;
>>>>>>> d75381244a5fdbb1777a1a6922155645d17efa88

  protected rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private appConstants: AppConstants) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      this.appConstants.loadData().subscribe(
        (data: any) => this.onLoadConstants(data),
        (error: any) => this.onLoadConstantsError(error)
      );
=======

    protected rootPage: any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private appConstants: AppConstants) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();

            this.appConstants.loadData().subscribe(
                (data: any) => this.onLoadConstants(data),
                (error: any) => this.onLoadConstantsError(error)
            );
        });
    }
>>>>>>> d75381244a5fdbb1777a1a6922155645d17efa88

<<<<<<< HEAD
    });

  }

  private onLoadConstants(data: any) {

    this.appConstants.initData(data.body);
    this.rootPage = HomePage;

  }

  private onLoadConstantsError(error: any) {

    console.error('Error on appConstants.loadData(): ', error);

  }
=======
    private onLoadConstants(data: any) {
        this.appConstants.initData(data.body);
        this.rootPage = HomePage;
    }
>>>>>>> d75381244a5fdbb1777a1a6922155645d17efa88

}

enableProdMode();
