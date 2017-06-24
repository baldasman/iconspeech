import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CommunicationTypesPage} from "../pages/communication-types/communication-types";
import {IconsMessagePage} from "../pages/icons-message/icons-message";
import {TranslationTextPage} from "../pages/translation-text/translation-text";
import {TranslationTextResultPage} from "../pages/translation-text-result/translation-text-result";
import {TranslationVoicePage} from "../pages/translation-voice/translation-voice";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CommunicationTypesPage,
        IconsMessagePage,
        TranslationTextPage,
        TranslationTextResultPage,
        TranslationVoicePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
