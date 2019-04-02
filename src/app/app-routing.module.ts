import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SettingComponent} from './pages/setting/setting.component';
import {VotesComponent} from './pages/votes/votes.component';
import {FavouritesComponent} from './pages/favourites/favourites.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {canActivate: [AuthGuard], path: '', redirectTo: '/home', pathMatch: 'full'},
  {canActivate: [AuthGuard], path: 'home', component: HomeComponent},
  {canActivate: [AuthGuard], path: 'setting', component: SettingComponent},
  {canActivate: [AuthGuard], path: 'votes', component: VotesComponent},
  {canActivate: [AuthGuard], path: 'favourites', component: FavouritesComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
