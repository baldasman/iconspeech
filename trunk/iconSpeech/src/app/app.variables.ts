import { Injectable } from '@angular/core';

@Injectable()
export class AppVariables {

	public sourceLanguage: any;
	public targetLanguage: any;

	constructor() {}

    setSourceLanguage(lang: any) {
        this.sourceLanguage = lang;
    }

    setTargetLanguage(lang: any) {
        this.targetLanguage = lang;
    }
}
