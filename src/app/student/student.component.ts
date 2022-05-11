import { Component, Injector, OnInit } from '@angular/core';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends AppController implements OnInit {
 text:string=""
  constructor(public injector:Injector,private data:AppService) {super(injector) }

  ngOnInit() {
    this.data.share.subscribe(dat=>this.text=dat)
  }
}
