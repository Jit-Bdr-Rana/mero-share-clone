import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExampleServiceService } from '../example-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  notifierSubscription: Subscription = this.examleService.subjectNotifier.subscribe(notified => {
   alert(notified);
  });
  constructor(private examleService:ExampleServiceService) { }

  ngOnInit(): void {
    this.trigger();
  }
  
public trigger(){
  this.examleService.subjectNotifier.subscribe((n)=>{
    console.log(n,'dsad')
    this.text=n;
  })
}


  public text:string='';

}
