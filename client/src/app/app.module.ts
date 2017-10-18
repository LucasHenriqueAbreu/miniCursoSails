import { UserModule } from './views/user/user.module';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HttpInterceptorService } from "./services/http-interceptor-service";
import { LoginComponent } from './views/login/login.component';
import { LoginModule } from "./views/login/login.module";
import { TodoModule } from "./views/todo/todo.module";
import { LayoutsModule } from "./common/layouts/layouts.module";
import { UserComponent } from './views/user/user.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,
    HttpClientModule,

    //Views
    LayoutsModule,
    LoginModule,
    TodoModule,
    UserModule,
    
    ROUTES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
