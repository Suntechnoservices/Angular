import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import URLS from '../common/URLS';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private _http:HttpClient) { }
  public updateEmp(obj:any):Observable<any>{
    return this._http.post(URLS+"/update",obj);
  };
};
