import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseService } from '../providers/base.service';

@Injectable()
export class AppConstants extends BaseService {

    public countries = [];
    public supportedLanguages = [];
    public icons = [];

	constructor(private platform: Platform, private http: Http) {
		super();
	}

	loadData(): Observable<Response> {
		let url = '';

		if(this.platform.is('core') || this.platform.is('mobileweb')){
			url = '/assets/data/constants.json';
		} else if (this.platform.is('android')) {
			url = '/android_asset/www/assets/data/constants.json';
		} else if (this.platform.is('ios')) {
			//url = 'iconSpeech.app/www';
			url = 'assets/data/constants.json';
		}

		console.log("isIOS?" + this.platform.is('ios'), "isAndroid?" + this.platform.is('android'), url);

		return this.http.get(url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	initData(data: any) {
		this.countries = data.countries;
		this.supportedLanguages = data.supportedLanguages;
        this.icons = data.icons;
	}
}
