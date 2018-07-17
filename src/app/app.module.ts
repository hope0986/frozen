import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { IncrediblesComponent } from './incredibles/incredibles.component';
import { AppRoutingModule } from './/app-routing.module';
import { routing } from './/app-routing.module';
import { TinkerComponent } from './tinker/tinker.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LandingComponent,
    IncrediblesComponent,
    TinkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
