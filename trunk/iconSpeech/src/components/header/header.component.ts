import { Component, Input } from '@angular/core';
import { ViewController, PopoverController } from 'ionic-angular';
import {AppVariables} from "../../app/app.variables";
import {LanguagesSelectorPopoverPage} from "../../popovers/languages-selector/languages-selector.popover";

// *** SERVICES ***

@Component({
    selector: 'component-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    constructor(private appVariables: AppVariables, private popoverCtrl: PopoverController) {

    }

    presentPopover(type: string) {
        this.appVariables.setPopoverLanguageType(type);
        let popover = this.popoverCtrl.create(LanguagesSelectorPopoverPage);
        popover.present({ ev: event });
    }

    toggleLanguages() {
        let aux = this.appVariables.targetLanguage;
        this.appVariables.setTargetLanguage(this.appVariables.sourceLanguage);
        this.appVariables.setSourceLanguage(aux);
    }

}