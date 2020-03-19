import { Component, OnInit, Input } from '@angular/core';
import { InsertService } from 'src/app/services/insert.service';
import errCallBack from 'src/app/common/errCallBack';
@Component({
  selector: 'insert',
  templateUrl: './insert.component.html',
  styles: []
})
export class InsertComponent implements OnInit {
  private insertStatus:any;
  @Input() var_one;  
  constructor(private _service:InsertService) { }
  ngOnInit() {
  }
  public insert(obj:any):any{
    this._service.addEmp(obj).subscribe((posRes)=>{
      if(posRes.insert == "success"){
          this.var_one.push(obj);         
      }
      this.insertStatus = posRes;
    },errCallBack);
  };
};
