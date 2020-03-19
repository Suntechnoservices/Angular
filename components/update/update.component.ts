import { Component, OnInit, Input } from '@angular/core';
import { UpdateService } from 'src/app/services/update.service';
import errCallBack from 'src/app/common/errCallBack';
@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {
  private updateStatus:any;
  @Input() var_one;
  constructor(private _service:UpdateService) { }
  ngOnInit() {
  }
  public update(obj:any):any{
    console.log(obj);
    this._service.updateEmp(obj).subscribe((posRes)=>{
        if(posRes.update == "success"){
            for(let i:number=0;i<this.var_one.length;i++){
              if(this.var_one[i].e_id == obj.e_id){
                this.var_one[i].e_name = obj.e_name;
                this.var_one[i].e_sal = obj.e_sal;
              }
              this.updateStatus = posRes;
            }
        }
    },errCallBack);
  };
}
