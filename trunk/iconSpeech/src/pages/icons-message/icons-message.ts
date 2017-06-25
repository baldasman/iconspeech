import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";
import {TranslationTextService} from "../../providers/translation-text-service/translation-text.service";
import {TranslationTextPage} from "../translation-text/translation-text";

@Component({
    selector: 'page-icons-message',
    templateUrl: 'icons-message.html'
})
export class IconsMessagePage extends BasePage {

    private messageIcons: string[];
    private messageText: string;
    private messageTextAux: string[];
    private messageTextLoading: boolean;

    constructor(navCtrl: NavController, private translationTextService: TranslationTextService) {
        super(navCtrl);

        this.messageTextAux = [];
    }

    ionViewDidEnter() {
        this.messageIcons = [];
        this.messageText = '';
        this.messageTextAux = [];
        this.messageTextLoading = false;
    }

    selectIcon(name: string, text: string) {
        let iconPath: string = 'assets/imgs/' + name;
        this.messageIcons.push(iconPath);
        this.getTranslation(text);
    }

    getTranslation(text?: string) {
        this.messageTextLoading = true;
        this.messageText = '';

        if (text) {
            this.messageTextAux.push(text);
        }

        this.translationTextService.text2text({
            text: this.messageTextAux.join(' '),
            from: 'en',
            to: this.appVariables.sourceLanguage
        }).subscribe((data) => {
            this.messageText = data['body'].translations[0].translation;
            this.messageTextLoading = false;
        });
    }

    eraseLastIcon() {
        if (this.messageIcons.length) {
            this.messageIcons.splice(this.messageIcons.length - 1, 1);
            this.messageTextAux.splice(this.messageTextAux.length - 1, 1);
            if (this.messageIcons.length) {
                this.getTranslation();
            }
        }
    }

    goToTranslationText() {
        if (this.messageTextAux.length > 0) {
            return this.navCtrl.push(TranslationTextPage, { inputText: this.messageText });
        }
    }
}
