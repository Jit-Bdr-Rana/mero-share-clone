import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private examleService:ExampleServiceService) { }

  ngOnInit(): void {
       this.examleService.notifyAboutChange('pupil');
  }

  check(){
    this.examleService.notifyAboutChange('jit');
  }

}
