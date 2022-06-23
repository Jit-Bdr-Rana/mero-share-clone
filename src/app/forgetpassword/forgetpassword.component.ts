import { Component, Injector, OnInit } from '@angular/core';
import { AppController } from '../app.controller';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent extends AppController implements OnInit {


  /**
   * route data
   */

  public id:any;

  constructor(public override injector:Injector) {
    super(injector);
    this.id=this.activeRoute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
  }

}
