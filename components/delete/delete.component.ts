import { Component, OnInit, Input } from '@angular/core';
import { DeleteService } from 'src/app/services/delete.service';
import errCallBack from 'src/app/common/errCallBack';
@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styles: []
})
export class DeleteComponent implements OnInit {
  private removeStatus:any;
  @Input() var_one;
  constructor(private _service:DeleteService) { }
  ngOnInit() {
  }
  public remove(obj:any):any{
    this._service.deleteEmp(obj).subscribe((posRes)=>{
        let index = this.var_one.findIndex((item)=>{
           return item.e_id == obj.e_id
        }); 
        this.var_one.splice(index,1);
        this.removeStatus = posRes;
    },errCallBack);
  };
};
