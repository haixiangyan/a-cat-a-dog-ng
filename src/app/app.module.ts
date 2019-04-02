import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SettingComponent} from './pages/setting/setting.component';
import {VotesComponent} from './pages/votes/votes.component';
import {FavouritesComponent} from './pages/favourites/favourites.component';
import {RegisterComponent} from './pages/register/register.component';
import {HeaderComponent} from './components/header/header.component';
import {AnalysisComponent} from './components/analysis/analysis.component';
import {FormsModule} from '@angular/forms';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {Api} from './http';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    VotesComponent,
    FavouritesComponent,
    RegisterComponent,
    HeaderComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: NZ_I18N, useValue: en_US
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: Api,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
