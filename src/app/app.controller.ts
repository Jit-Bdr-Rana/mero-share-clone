import { Injector } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
export class AppController {

 constructor(public injector: Injector){
  this.formBuilder = this.injector.get(FormBuilder);
}
/**
 * form group
 */
public formBuilder:FormBuilder;
}
