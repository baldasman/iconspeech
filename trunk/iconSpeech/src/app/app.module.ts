import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CommunicationTypesPage} from "../pages/communication-types/communication-types";
import {IconsMessagePage} from "../pages/icons-message/icons-message";
import {TranslationTextPage} from "../pages/translation-text/translation-text";
import {TranslationTextResultPage} from "../pages/translation-text-result/translation-text-result";
import {TranslationVoicePage} from "../pages/translation-voice/translation-voice";
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import {AppConstants} from "./app.constants";
import {ServiceLocator} from "../providers/service-locator";
import {LanguagesSelectorPopoverPage} from "../popovers/languages-selector/languages-selector.popover";
import {HeaderComponent} from "../components/header/header.component";
import {AppVariables} from "./app.variables";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CommunicationTypesPage,
        IconsMessagePage,
        TranslationTextPage,
        TranslationTextResultPage,
        TranslationVoicePage,
        LanguagesSelectorPopoverPage,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CommunicationTypesPage,
        IconsMessagePage,
        TranslationTextPage,
        TranslationTextResultPage,
        TranslationVoicePage,
        LanguagesSelectorPopoverPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AppConstants,
        AppVariables,
        MediaPlugin,
        File,
        Transfer
    ]
})

export class AppModule {
    constructor(private injector: Injector) {
        ServiceLocator.injector = this.injector;
    }
}

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
