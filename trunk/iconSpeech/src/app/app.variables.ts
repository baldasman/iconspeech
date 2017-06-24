import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AppVariables {

	public sourceLanguage: string;
	public targetLanguage: string;
	public popoverLanguageType: string;

	constructor(private storage: Storage) {
        this.getValues();
    }

    getValues() {
        this.storage.get('sourceLanguage').then((val) => this.sourceLanguage = val || 'pt');
        this.storage.get('targetLanguage').then((val) => this.targetLanguage = val || 'en');
    }

    setSourceLanguage(lang: any) {
        this.sourceLanguage = lang;
        this.storage.set('sourceLanguage', lang);
    }

    setTargetLanguage(lang: any) {
        this.targetLanguage = lang;
        this.storage.set('targetLanguage', lang);
    }

    setPopoverLanguageType(type: string) {
        this.popoverLanguageType = type;
    }

}
