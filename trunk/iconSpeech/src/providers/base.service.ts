import { Injectable } from '@angular/core';
import { Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

// *** SERVICES ***
import {ServiceLocator} from "../providers/service-locator";

@Injectable()
export class BaseService {

    constructor() {}

	protected throwError(error: any, where?: string) {
		let text = (where ? 'Error on ' + where : 'Error') + ': ';

		console.error(text, error);
		throw new Error(text || 'Error');
	}

	// *** API REST ***
	protected getHeaders(token?: string): Headers {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Methods', '*');

		if (token) {
			headers.append('Authorization', token);
		}

		return headers;
	}

	protected extractData(res: Response) {
		let body = res.json() || {};
		let data = { status: res.status, ok: res.ok, statusText: res.statusText, headers: res.headers, body: body };

        console.log('body', body);
		return data;
	}

	protected handleError(error: any) {
		let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);

		return Observable.throw(errMsg);
	}

}
