import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorInterceptor } from './BusinessLogic/Validation/error.interceptor';

// All Module (Adminstration, Vender & User)'
import { AdministartionModule } from './Administration/administration.module';
import { VenderModule } from './Vender/vender.module';
import { UserModule } from './User/user.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdministartionModule,
    VenderModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
