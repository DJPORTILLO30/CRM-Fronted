import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterceptorCallsService } from '@core/interceptors/calls/interceptor-calls.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorBussinesService } from '@core/interceptors/bussines/interceptor-bussines.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorCallsService,
    useClass: InterceptorBussinesService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
