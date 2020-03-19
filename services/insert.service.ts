import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import URLS from '../common/URLS';
@Injectable({
  providedIn: 'root'
})
export class InsertService {
  constructor(private _http:HttpClient) { }
  public addEmp(obj:any):Observable<any>{
    return this._http.post(URLS+"/insert",obj);
  };
};
