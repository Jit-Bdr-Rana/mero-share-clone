import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
export class AppController {

 constructor(public injector: Injector){
  this.formBuilder = this.injector.get(FormBuilder);

}
/**
 * form builder
 */
public formBuilder:FormBuilder;
/**
 * http Client
 */
}
