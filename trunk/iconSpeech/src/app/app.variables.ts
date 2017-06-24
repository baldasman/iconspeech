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
        if (this.targetLanguage == lang) {
            this.targetLanguage = this.sourceLanguage;
            this.storage.set('targetLanguage', this.targetLanguage);
        }

        this.sourceLanguage = lang;
        this.storage.set('sourceLanguage', lang);
    }

    setTargetLanguage(lang: any) {
        if (this.sourceLanguage == lang) {
            this.sourceLanguage = this.targetLanguage;
            this.storage.set('sourceLanguage', this.sourceLanguage);
        }

        this.targetLanguage = lang;
        this.storage.set('targetLanguage', lang);
    }

    toggleSourceAndTargetLanguages() {
        let aux = this.targetLanguage;
        this.setTargetLanguage(this.sourceLanguage);
        this.setSourceLanguage(aux);
    }

    setPopoverLanguageType(type: string) {
        this.popoverLanguageType = type;
    }

}
