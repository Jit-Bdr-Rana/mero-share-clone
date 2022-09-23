import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BodyComponent } from "./body/body.component";
import { ExampleModuleComponent } from "./example-module.component";
import { HeaderComponent } from "./header/header.component";

const route:Routes=[
    {
        path:'',     
        component:ExampleModuleComponent,
        children:[
         {
            path:'body',
            component:BodyComponent
         },
         {
            path:'header',
            component:HeaderComponent
         }
       ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],

})
export class ExampleRoutingModule{

}