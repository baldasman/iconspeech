import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";
import {IconsMessagePage} from "../icons-message/icons-message";
import {TranslationVoicePage} from "../translation-voice/translation-voice";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends BasePage {

    constructor(navCtrl: NavController) {
        super(navCtrl);
    }

    goToIconsMessage() {
        this.navCtrl.push(IconsMessagePage);
    }

    gotToFood(){

      this.navCtrl.push(TranslationVoicePage);

    }

}
