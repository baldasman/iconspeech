import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// *** MODELS ***
import { AppConstants } from '../../app/app.constants';

// *** SERVICES ***
import { BaseService } from '../base.service';

@Injectable()
export class TranslationVoiceService extends BaseService {

  private translateVoiceUrl: string;

  constructor(private http: Http, private appConstants: AppConstants) {
    super();

    this.translateVoiceUrl = 'https://iconspeechserver.eu-gb.mybluemix.net/translation/speech2text';
  }

  // *** REST API ***


  speech2text(params: any): Observable<Response> {
    let options = new RequestOptions({ headers: this.getHeaders() });

    return this.http.post(this.translateVoiceUrl, params, options)
      .map(this.extractData)
      .catch(this.handleError);
  }



}
