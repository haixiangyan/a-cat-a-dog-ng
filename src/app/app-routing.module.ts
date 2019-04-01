import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SettingComponent} from './pages/setting/setting.component';
import {VotesComponent} from './pages/votes/votes.component';
import {FavouritesComponent} from './pages/favourites/favourites.component';
import {RegisterComponent} from './pages/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'votes', component: VotesComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
