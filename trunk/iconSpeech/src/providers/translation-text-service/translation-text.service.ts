import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// *** SERVICES ***
import { BaseService } from '../base.service';

@Injectable()
export class TranslationTextService extends BaseService {

    private translateTextUrl: string;

    constructor(private http: Http) {
        super();

        this.translateTextUrl = 'https://iconspeechserver.eu-gb.mybluemix.net/translation/translate';
    }

    // *** REST API ***
    text2text(params: any): Observable<Response> {
        console.log('params', params);
        let options = new RequestOptions({ headers: this.getHeaders() });

        return this.http.post(this.translateTextUrl, params, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

}
