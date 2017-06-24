import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// *** PAGES ***
import { BasePage } from '../../pages/base-page';

@Component({
    selector: 'popover-header-contact',
    templateUrl: 'header-contact.popover.html'
})
export class LanguagesSelectorPopoverPage extends BasePage {
    
    constructor(navCtrl: NavController) {
        super(navCtrl);
    }

}