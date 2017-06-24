import { Component, Input } from '@angular/core';
import { ViewController, PopoverController } from 'ionic-angular';
import {AppConstants} from "../../app/app.constants";

// *** SERVICES ***

@Component({
    selector: 'component-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    @Input() private sourceLanguage: any;
    @Input() private targetLanguage: any;

    constructor(private appConstants: AppConstants) {

    }

}