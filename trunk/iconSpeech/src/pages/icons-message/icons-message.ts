import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {BasePage} from "../base-page";
import {TranslationTextService} from "../../providers/translation-text-service/translation-text.service";
import {TranslationTextPage} from "../translation-text/translation-text";

@Component({
  selector: 'page-icons-message',
  templateUrl: 'icons-message.html'
})
export class IconsMessagePage extends BasePage {

  private messageIcons: string[];
  private messageText: string;
  private messageTextAux: string[];
  private messageTextLoading: boolean;
  private filter: string;
  private icons = [];
  private android: boolean;

  constructor(platform: Platform, navCtrl: NavController, private translationTextService: TranslationTextService, private navParams: NavParams) {
    super(navCtrl);
    this.android = platform.is('android');
    this.messageTextAux = [];
  }

  ionViewDidEnter() {
    this.messageIcons = [];
    this.messageText = '';
    this.messageTextAux = [];
    this.messageTextLoading = false;
    this.setScrollContentHeight();

    console.log('Filter: ' + this.navParams.get('iconName'));

    if (this.navParams.get('iconName')) {
      this.filter = this.navParams.get('iconName');
      this.filterIcons(this.filter);
    } else {
      this.icons = this.appConstants.icons;
    }
  }

  selectIcon(name: string, text: string) {
    let iconPath: string = 'assets/imgs/' + name;
    this.messageIcons.push(iconPath);
    this.getTranslation(text);
    this.setScrollContentHeight();

    console.log('icon: ' + name);
  }

  getTranslation(text?: string) {
    this.messageTextLoading = true;
    this.messageText = '';

    if (text) {
      this.messageTextAux.push(text);
    }

    this.translationTextService.text2text({
      text: this.messageTextAux.join(' '),
      from: 'en',
      to: this.appVariables.sourceLanguage
    }).subscribe((data) => {
      this.messageText = data['body'].translations[0].translation;
      this.messageTextLoading = false;
    });
  }

  eraseLastIcon() {
    if (this.messageIcons.length) {
      this.messageIcons.splice(this.messageIcons.length - 1, 1);
      this.messageTextAux.splice(this.messageTextAux.length - 1, 1);
      if (this.messageIcons.length) {
        this.getTranslation();
      }
    }
    this.setScrollContentHeight();
  }

  setScrollContentHeight() {
    document.getElementById('icons-container').style.marginTop = document.getElementById('toolbar').offsetHeight + 'px';
  }

  goToTranslationText() {
    if (this.messageTextAux.length > 0) {
      return this.navCtrl.push(TranslationTextPage, {inputText: this.messageText});
    }
  }

  private filterIcons(filter: string) {
    this.icons = [];

    this.appConstants.icons.forEach((icon) => {
      if(icon.parent && icon.parent === filter) {
        this.icons.push(icon);
      }
    });
  }
}
