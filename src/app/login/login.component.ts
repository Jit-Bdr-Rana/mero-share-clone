import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppController } from '../app.controller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppController implements OnInit {
 public loginForm:FormGroup;

 constructor(public override injector:Injector) { 
    super(injector)
     this.loginForm=this.formBuilder.group({
      dpName:['',Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  
  }

  public formSubmit(){
    alert(1)
    console.log(this.loginForm)
  }

}
