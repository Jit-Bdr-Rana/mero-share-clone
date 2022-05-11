import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
 text:string=""
  constructor(private data:AppService) { }

  ngOnInit() {
    this.data.share.subscribe(dat=>this.text=dat)
  }

}
