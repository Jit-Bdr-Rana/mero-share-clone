import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppHttpClient } from './service/app-http-client.service';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 private content=new BehaviorSubject<string>("default string");
  constructor(private http:AppHttpClient) {
   }
 public share=this.content.asObservable();
 updateDate(text:any){
  this.content.next(text);  
 }


 public getListOfDp():Observable<any>{
   const url:string=`https://webbackend.cdsc.com.np/api/meroShare/capital/`;
  return this.http.get<DpInterface>(url);
 }

}


export interface DpInterface{
  code:String,
  id:number,
  name:string,
}