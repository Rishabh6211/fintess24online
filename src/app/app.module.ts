import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlashMessagesModule } from 'ngx-flash-messages';
// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

/* Home component */
import { HomeComponent } from './home/home.component';

/*Auth Module. */
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
//image slider
import { CarouselModule } from 'ngx-bootstrap';

import { Angular2SocialLoginModule, AuthService } from "angular2-social-login";

import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { MaterializeModule } from 'angular2-materialize';
import { CustomFormsModule } from 'ng2-validation'
import { ActiveRouteGuard } from './auth/services/activate-route-guard';
import { DeactiveRouteGuard } from './auth/services/deactivate-route-guard';
import tsConstants = require('./shared/config/tsconstant');

import { NgxGalleryModule } from 'ngx-gallery';

import { LanguageService } from './shared/services/language.service';

import 'rxjs/Rx';

let providers = {
    "google": {
      "clientId": tsConstants.GOOGLE_CLIENT_ID
    },
    "facebook": {
      "clientId": tsConstants.FACEBOOK_CLIENT_ID,
      "apiVersion": tsConstants.FACEBOOK_API_VERSION
    }
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        DropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        CarouselModule.forRoot(),
        // Angular2SocialLoginModule,
        CookieModule.forRoot(),
        SharedModule,
        MaterializeModule.forRoot(),
        CustomFormsModule,
        FlashMessagesModule,
        NgxGalleryModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
    ],
    providers: [
        AuthService,
        LanguageService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        ActiveRouteGuard,
        DeactiveRouteGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
    constructor() {
        //Angular2SocialLoginModule.loadProvidersScripts(providers);        
    }

}

// Angular2SocialLoginModule.loadProvidersScripts(providers);
