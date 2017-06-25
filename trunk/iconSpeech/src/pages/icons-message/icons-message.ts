import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";
import {TranslationTextService} from "../../providers/translation-text-service/translation-text.service";

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
            console.log('data', data);
            this.messageText = data['body'].translations[0].translation;
            this.messageTextLoading = false;
        });
    }

    eraseLastIcon() {
        if (this.messageIcons.length) {
            this.messageIcons.splice(this.messageIcons.length - 1, 1);
            this.messageTextAux.splice(this.messageTextAux.length - 1, 1);
            this.getTranslation();
        }
    }
}
