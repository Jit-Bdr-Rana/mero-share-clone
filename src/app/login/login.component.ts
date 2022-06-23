import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppController } from '../app.controller';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { DpInterface } from '../app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppController implements OnInit {

  /**
   * current date
   */

  public currentDate:number=new Date().getFullYear();

 public loginForm:FormGroup;


 public dpList:DpInterface[];

 constructor(public override injector:Injector) { 
    super(injector)
     this.loginForm=this.formBuilder.group({
      dpName:['',Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  this.fetchDpData();
  }

  public formSubmit(){
    console.log(this.loginForm)
  }
  public fetchDpData(){
    this.appService.getListOfDp().subscribe((response)=>{
        this.dpList=response;
        console.log(this.dpList)
    })
  }
}
