import { NavController, Events, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { isUndefined } from 'ionic-angular/util/util';

// *** SERVICES ***
import { ServiceLocator } from '../providers/service-locator';
import { AppConstants } from '../app/app.constants';
import { AppVariables } from '../app/app.variables';

export class BasePage {

    protected navCtrl: NavController;
    protected translateService: TranslateService;
    protected appConstants: AppConstants;
    protected appVariables: AppVariables;

    protected pageTranslations: any = {};

    constructor(navCtrl: NavController) {
        this.navCtrl = navCtrl;
        this.appConstants = ServiceLocator.injector.get(AppConstants);
        this.appVariables = ServiceLocator.injector.get(AppVariables);
        this.translateService = ServiceLocator.injector.get(TranslateService);

        this.translateService.setDefaultLang(this.appVariables.sourceLanguage);
        this.loadTranslations([]);
    }

    protected loadTranslations(translationsToLoad: string[], success?: Function) {
        return this.translateService.get(translationsToLoad).subscribe(translations => {
            this.pageTranslations = translations;
            if (!isUndefined(success)) {
                success(translations);
            }
        });
    }

}
