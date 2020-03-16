import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarnavComponent } from './app-barnav/app-barnav.component';
import { AppBodyheroComponent } from './app-bodyhero/app-bodyhero.component';
import { AppBodypart2Component } from './app-bodypart2/app-bodypart2.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHeader2Component } from './app-header2/app-header2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarnavComponent,
    AppBodyheroComponent,
    AppBodypart2Component,
    AppHeaderComponent,
    AppHeader2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
