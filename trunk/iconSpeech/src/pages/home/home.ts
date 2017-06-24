import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  constructor(navCtrl: NavController) {
    super(navCtrl);
  }

}
