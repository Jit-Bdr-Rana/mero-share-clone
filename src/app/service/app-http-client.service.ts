import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Application Http Client
 */
export class AppHttpClient {

  /**
  * API Prefix
  * @type {String}
  */
  static prefix = '';

  /**
   * Default Constructor
   * @param {HttpClient} private http
   */
  constructor(private http: HttpClient) { }

  /**
   * Makes Http Call using GET Method
   * @param {String} uri Backend URI for Http Call
   * @param {Object} Params Object
   * @type {string}
   */
  public get<T>(uri: string, params = {}): Observable<T> {
    return this.http.get<T>(uri, { params: params });
  }

  /**
   * Makes Http Call using POST Method
   * @param {String} uri Backend URI for Http Call
   * @param {Object} Params Object
   * @type {string}
   */
  public post<T>(uri: string, params = {}, options?: {}): Observable<T> {
    return this.http.post<T>(this.perfixUri(uri), params, options);
  }

  /**
   * Makes Http Call using PUT Method
   * @param {String} uri Backend URI for Http Call
   * @param {Object} Params Object
   * @type {string}
   */
  public put<T>(uri: string, params:any = {}): Observable<T> {
    params['_method'] = 'PUT';
    return this.http.put<T>(this.perfixUri(uri), params);
  }

  /**
   * Makes Http Call using POST Method
   * @param {String} uri Backend URI for Http Call
   * @param {Object} Params Object
   * @type {string}
   */
  // public delete<T>(uri: string, params:any = {}): Observable<T> {
  //   params['_method'] = 'DELETE';
  //   return this.http.delete<T>(this.perfixUri(uri), params);
  // }

  /**
   * Perpares Backedn URL with API Perfix
   * @param {string} uri [description]
   */
  private perfixUri(uri: string) {
    /**
     * URI with API BASE URL
     */
    return environment.baseAPIURL + uri;
  }
}
