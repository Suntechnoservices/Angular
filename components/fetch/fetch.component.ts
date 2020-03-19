import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import errCallBack from 'src/app/common/errCallBack';
@Component({
  selector: 'fetch',
  templateUrl: './fetch.component.html',
  styles: []
})
export class FetchComponent implements OnInit {
  public records:any;
  constructor(private _service:FetchService) { }
  ngOnInit() {
    this._service.getEmployees().subscribe((posRes)=>{
      this.records = posRes;
    },errCallBack);
  }
}
