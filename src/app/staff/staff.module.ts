import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { ManagementComponent } from './management/management.component';
import { AppService } from '../app.service';

@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ],
  exports:[ManagementComponent],
  providers:[AppService]
})
export class StaffModule { }
