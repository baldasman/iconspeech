import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

// *** PAGES ***
import { BasePage } from '../../pages/base-page';
import {AppVariables} from "../../app/app.variables";

@Component({
    selector: 'popover-languages-selector',
    templateUrl: 'languages-selector.popover.html'
})
export class LanguagesSelectorPopoverPage extends BasePage {
    
    constructor(navCtrl: NavController, private viewCtrl: ViewController) {
        super(navCtrl);
    }

    setLanguage(lang: string) {
        if (this.appVariables.popoverLanguageType == 'source') {
            this.appVariables.setSourceLanguage(lang);
        } else if (this.appVariables.popoverLanguageType == 'target') {
            this.appVariables.setTargetLanguage(lang);
        }
        this.viewCtrl.dismiss();
    }
}