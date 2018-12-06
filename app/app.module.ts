import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { StronyFacebookoweComponent } from './strony-facebookowe/strony-facebookowe.component';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StronaGlownaComponent,
    StronyFacebookoweComponent,
    PageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
