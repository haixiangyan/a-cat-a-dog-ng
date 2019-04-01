import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingComponent } from './pages/setting/setting.component';
import { VotesComponent } from './pages/votes/votes.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AnalysisComponent } from './components/analysis/analysis.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
