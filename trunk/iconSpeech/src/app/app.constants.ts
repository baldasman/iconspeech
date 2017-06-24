import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BaseService } from '../providers/base.service';

@Injectable()
export class AppConstants extends BaseService {

    public countries = [];

	constructor(private platform: Platform, private http: Http) {
		super();
	}

	loadData(): Observable<Response> {
		let url = '';

		if(this.platform.is('core') || this.platform.is('mobileweb')){
			url = '';
		} else if (this.platform.is('android')) {
			url = '/android_asset/www';
		} else if (this.platform.is('ios')) {
			url = 'XIMI.app/www';
		}

		return this.http.get(url + '/assets/data/constants.json')
			.map(this.extractData)
			.catch(this.handleError);
	}

	initData(data: any) {
		this.countries = data.countries;
	}
}
