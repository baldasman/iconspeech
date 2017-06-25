import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";
import {IconsMessagePage} from "../icons-message/icons-message";
<<<<<<< HEAD
import {CommunicationTypesPage} from "../communication-types/communication-types";
=======
import {TranslationVoicePage} from "../translation-voice/translation-voice";
>>>>>>> a4a63bb49b56239e803027550f26d0e9cc014ceb

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

<<<<<<< HEAD
    goToCommunicationTypes() {
        this.navCtrl.push(CommunicationTypesPage);
=======
    gotToFood(){

      this.navCtrl.push(TranslationVoicePage);

>>>>>>> a4a63bb49b56239e803027550f26d0e9cc014ceb
    }

}
