import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit{
  data:any={}
  form:FormGroup = new FormGroup({});
  id:number
  constructor(private service:MainDashoardService,private route:ActivatedRoute) {

    route.params.subscribe(params=>{
      this.id=params['id']
    })
    
  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.service.activityService.getٌReport(this.id).subscribe(response=>{
      if(response.statusCode=='200'){
        this.data=response.data
        this.form = this.service.formBuilder.group({
          report:[this.data,[Validators.required]],
         
        });
        
      }else{
        this.service.toastService.error(response.message);
      }      
    })
      this.form = this.service.formBuilder.group({
        report:['',[Validators.required]],
       
      });
   
  }

  get report(){
    return this.form.controls['report']
  }

  submit(){
    if(this.form.valid){
      console.log(this.id,this.report.value);
      
      this.service.activityService.addReport({id:this.id,report:this.report.value}).subscribe(response=>{
        if(response.statusCode=='200'){
          this.service.toastService.success('تم اضافة البيانات')
        }else{
          this.service.toastService.error(response.message);
        }
      })
    }else{
      this.service.toastService.error('افحص المدخلات')
    }
  }
}
