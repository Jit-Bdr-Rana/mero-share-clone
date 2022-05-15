import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:'login',
  component:LoginComponent
},{
  path:'forgetpassword',
  component:ForgetpasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,
       ReactiveFormsModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthRoutingModule { }
