import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { AppHttpClient } from './service/app-http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule
  ],
  providers: [AppService,AppHttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
