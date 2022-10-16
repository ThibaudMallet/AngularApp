import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { ImageShareComponent } from './image-share/image-share.component';
import { ImageShareListComponent } from './image-share-list/image-share-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleImageShareComponent } from './single-image-share/single-image-share.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageShareComponent,
    ImageShareListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleImageShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
