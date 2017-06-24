import { Component, Input } from '@angular/core';
import { ViewController, PopoverController } from 'ionic-angular';
import {AppConstants} from "../../app/app.constants";
import {LanguagesSelectorPopoverPage} from "../../popovers/languages-selector/header-contact.popover";

// *** SERVICES ***

@Component({
    selector: 'component-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    @Input() private sourceLanguage: any;
    @Input() private targetLanguage: any;

    constructor(private popoverCtrl: PopoverController, private appConstants: AppConstants) {

    }

    presentPopover(event: any) {
        let popover = this.popoverCtrl.create(LanguagesSelectorPopoverPage);
        popover.present({ ev: event });
    }

}