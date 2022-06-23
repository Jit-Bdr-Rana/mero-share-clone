import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import { AppHttpClient } from './service/app-http-client.service';
export class AppController{

 constructor(public injector: Injector){
  this.formBuilder = this.injector.get(FormBuilder);
  this.httpAppClient=this.injector.get(AppHttpClient);
  // this.http=this.injector.get(HttpClient);
  this.appService=this.injector.get(AppService);
  this.activeRoute = this.injector.get(ActivatedRoute);
  this.routeData=this.activeRoute.snapshot.paramMap.get("data");
}
/**
 * form builder
 */
public formBuilder:FormBuilder;
/**
 * http app Client
 */
public httpAppClient:AppHttpClient

/**
 * http client
 */
// public http:HttpClient;
/**
 *  app service instance
 */
public appService:AppService;

/**
 *  activate route
 */
 public activeRoute:ActivatedRoute;
 /**
  *  route paramter Data
  */
 public routeData:any;

}
