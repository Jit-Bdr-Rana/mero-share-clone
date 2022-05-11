import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,OnChanges {

 @Input() name:string;
 @Input() roll:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(name: SimpleChanges ): void {
  }

  RegisterForm(regform:any){
console.log(regform)
  }

}
