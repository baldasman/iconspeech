import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from "../base-page";

@Component({
    selector: 'page-icons-message',
    templateUrl: 'icons-message.html'
})
export class IconsMessagePage extends BasePage {

    private messageIcons: string[];

    constructor(navCtrl: NavController) {
        super(navCtrl);
    }

    ionViewDidEnter() {
        this.messageIcons = [];
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
        this.messageIcons.push('assets/imgs/24h.png');
    }

    eraseLastIcon() {
        if (this.messageIcons.length) {
            this.messageIcons.splice(this.messageIcons.length - 1, 1);
        }
    }
}
