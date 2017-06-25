import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TranslationTextService} from "../../providers/translation-text-service/translation-text.service";
import {MediaPlugin} from "@ionic-native/media";
import {BaseService} from "../../providers/base.service";
import {BasePage} from "../base-page";
import {InAppBrowser} from "@ionic-native/in-app-browser";
declare var Media:any;

@Component({
  selector: 'page-translation-text',
  templateUrl: 'translation-text.html'
})
export class TranslationTextPage extends BasePage{
  enterText: any;
  textTranslated: any = null;
  textAudio: any;
  canRead: boolean = false;
  audio: any;
  constructor(navCtrl: NavController, public translationTextService: TranslationTextService, private media: MediaPlugin, private iab: InAppBrowser, private navParams: NavParams) {
    super(navCtrl);

  }

    ionViewDidEnter() {
        if (this.navParams.get('inputText')) {
            this.enterText = this.navParams.get('inputText');
            this.getTranslation();
        }
    }

  getTranslation(){
    let params = {
      text: this.enterText,
      from: this.appVariables.sourceLanguage,
      to: this.appVariables.targetLanguage
    };

    this.translationTextService.text2text(params).subscribe((data) => {
      console.log('data response', data);
      this.textTranslated = data['body'].translations[0].translation;
      this.textAudio = data['body'].sound;
      console.log('sound','https://iconspeechserver.eu-gb.mybluemix.net/' + this.textAudio);
      const onStatusUpdate = (status) => console.log(status);
      const onSuccess = () => console.log('Action is successful.');
      const onError = (error) => console.error(error.message);
      //this.audio = this.media.create('https://iconspeechserver.eu-gb.mybluemix.net/' + this.textAudio,  onStatusUpdate, onSuccess, onError);


      if(this.textTranslated != null){
        this.canRead = true;
      }
    });
  }

  playAudio(){

    const browser = this.iab.create('https://iconspeechserver.eu-gb.mybluemix.net/' + this.textAudio);
    browser.show();
  }

}
