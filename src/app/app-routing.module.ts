import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{
  path:'auth',
  loadChildren:()=>AuthRoutingModule
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'auth2',
  component:AppComponent
},
{
  path:'',
  component:AppComponent
}
];

@NgModule({
  imports: [
       RouterModule.forRoot(routes)  // .../#/crisis-center/,
      ],
  exports: [RouterModule,
       ReactiveFormsModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
