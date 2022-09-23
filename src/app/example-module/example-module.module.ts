import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { ExampleModuleComponent } from './example-module.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleRoutingModule } from './example-module.routing';
@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    ExampleModuleComponent,
  ],
  imports: [
    ExampleRoutingModule
  ],
  bootstrap:[ExampleModuleComponent],
})
export class ExampleModuleModule { }
