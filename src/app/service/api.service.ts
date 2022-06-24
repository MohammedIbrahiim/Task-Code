import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  sendData(userdata:object):Observable<any>{
    return this._HttpClient.post('https://reqres.in/api/payment',userdata)
  }

}
