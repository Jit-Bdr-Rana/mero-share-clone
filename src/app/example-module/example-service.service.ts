import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {
  subjectNotifier: Subject<string> = new Subject<string>();
  constructor() { }
  notifyAboutChange(str:string) {
    this.subjectNotifier.next(str);
  }
}
