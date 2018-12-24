import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl:string = 'http://192.168.1.186/public_html/m.php'
  constructor(private http:HttpClient) { }
  get(params) {
    return this.http.get(this.baseUrl+params)
  }
  post(params){
    return this.http.post(this.baseUrl,null,params)
  }
}
