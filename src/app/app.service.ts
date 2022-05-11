import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 private content=new BehaviorSubject<string>("default string");
  constructor() {
   }
 public share=this.content.asObservable();
 updateDate(text){
  this.content.next(text);  
 }

}
