import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IncrediblesComponent } from './incredibles/incredibles.component';
import { TinkerComponent } from './tinker/tinker.component';

const appRoutes:Routes = [
	{ path: 'incredibles', component: IncrediblesComponent},
	{ path: 'tinker', component: TinkerComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
