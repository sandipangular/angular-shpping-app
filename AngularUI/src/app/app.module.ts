import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//BusinessService
import { BusinessService } from './BusinessLogic/Business/business.service';

//Component
import { AppComponent } from './app.component';

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
    AdministartionModule,
    VenderModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true,
  },
  BusinessService
],
  bootstrap: [AppComponent],
  exports:[]
})

export class AppModule { }
