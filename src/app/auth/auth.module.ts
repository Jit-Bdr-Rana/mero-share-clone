import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgetpasswordComponent
  ],
  imports: [
            BrowserModule,
    AuthRoutingModule,
    ReactiveFormsModule,
     FormsModule,
  ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA ],
bootstrap: [AuthComponent],
})
export class AuthModule { }
