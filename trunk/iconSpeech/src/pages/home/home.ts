import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";
import {IconsMessagePage} from "../icons-message/icons-message";
import {CommunicationTypesPage} from "../communication-types/communication-types";
import {TranslationVoicePage} from "../translation-voice/translation-voice";
import {TranslationTextPage} from "../translation-text/translation-text";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends BasePage {

    constructor(navCtrl: NavController) {
        super(navCtrl);
    }

    goToCommunicationTypes() {
        this.navCtrl.push(CommunicationTypesPage);
    }


}
