import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   profileForm:FormGroup;

   public name:FormControl=new FormControl('');

  constructor() { 
     this.profileForm = new FormGroup({
    dpName: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  }

  ngOnInit(): void {
  }

}
