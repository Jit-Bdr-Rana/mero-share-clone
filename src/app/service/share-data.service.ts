import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ShareData{

subjectNotifier:Subject<string>=new Subject<string>();

  setStatus=(status:string)=>{
    this.subjectNotifier.next(status)
  }

}