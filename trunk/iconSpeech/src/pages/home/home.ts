import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {BasePage} from "../base-page";
import {IconsMessagePage} from "../icons-message/icons-message";
import {CommunicationTypesPage} from "../communication-types/communication-types";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  constructor(navCtrl: NavController) {
    super(navCtrl);
  }

  goToIconsMessage(name: string) {
    this.navCtrl.push(IconsMessagePage, {iconName: name})
  }

  goToCommunicationTypes() {
    this.navCtrl.push(CommunicationTypesPage);
  }


}
