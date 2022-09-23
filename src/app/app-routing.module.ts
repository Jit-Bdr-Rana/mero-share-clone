import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ExampleRoutingModule } from './example-module/example-module.routing';
const routes: Routes = [{
  path:'auth',
  loadChildren:()=>AuthRoutingModule
},
{
  path:'',
  component:LoginComponent
},
{
   path:'forgetpassword/:data',
   component:ForgetpasswordComponent,
   data:{'asd':'dasf'}
  },
{
  path:'auth2',
  component:AppComponent
},
{
  path:'example',
  loadChildren:()=>ExampleRoutingModule
}
];

@NgModule({
  imports: [
       RouterModule.forRoot(routes,{useHash:true})  // .../#/crisis-center/,
      ],
  exports: [RouterModule,
       ReactiveFormsModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
