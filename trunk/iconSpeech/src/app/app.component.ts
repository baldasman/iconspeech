import { Component, enableProdMode } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AppConstants} from "./app.constants";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

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

    private onLoadConstants(data: any) {
        this.appConstants.initData(data.body);
        this.rootPage = HomePage;
    }

    private onLoadConstantsError(error: any) {
        console.error('Error on appConstants.loadData(): ', error);
    }
}

enableProdMode();

