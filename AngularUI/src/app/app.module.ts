import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// All Module (Adminstration, Vender & User)'
import { AdministartionModule } from './Administration/administration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministartionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
