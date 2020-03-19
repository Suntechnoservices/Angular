import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import URLS from '../common/URLS';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private _http:HttpClient) { }
  public getEmployees():Observable<any>{
    return this._http.get(URLS+"/fetch");
  };
};
