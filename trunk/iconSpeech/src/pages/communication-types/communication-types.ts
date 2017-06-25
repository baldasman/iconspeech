import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IconsMessagePage} from "../icons-message/icons-message";
import {TranslationVoicePage} from "../translation-voice/translation-voice";
import {TranslationTextPage} from "../translation-text/translation-text";
import {BasePage} from "../base-page";

@Component({
    selector: 'page-communication-types',
    templateUrl: 'communication-types.html'
})
export class CommunicationTypesPage extends BasePage {

    constructor(navCtrl: NavController) {
        super(navCtrl);
    }

    goToIconsMessage() {
        this.navCtrl.push(IconsMessagePage);
    }

    goToTranslationVoice() {
        this.navCtrl.push(TranslationVoicePage);
    }

    goToTranslationText() {
        this.navCtrl.push(TranslationTextPage);
    }

}
