import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['../add-country/add-country.component.css','./edit-department.component.css']
})
export class EditDepartmentComponent  implements OnInit, AfterViewInit {
  id:number = 0 ;
  subItems:any;
  form:FormGroup = new FormGroup({});
  constructor(private service:MainDashoardService,private dialogRef: MatDialogRef<EditDepartmentComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.id = data.id;
  }
  ngAfterViewInit(): void {
    this.loadData();
    this.getSubItems();
  }
  ngOnInit(): void {
    this.createForm();
  }
  getSubItems(){
    this.service.specializationService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.subItems = res.data;
        }else{
          this.service.toastService.error(res.message);
        }
      }
    })
  }
  
  createForm(){
    this.form = this.service.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      specializationId:['',[Validators.required]],
    });
  }
  get name(){
    return this.form.controls['name'];
  }
  get specializationId(){
    return this.form.controls['specializationId'];
  }
  loadData(){
    this.service.departmentService.getById(this.id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.form.patchValue(res.data);
        }else{
          this.service.toastService.error(res.message);
        }
      },
      error:(error)=>{
        this.service.toastService.error(error.error);
      }
    })
  }
  submit() {
    // this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.departmentService.update(this.form.value).subscribe({
        next:(response:ResponseVM)=>{
          if(response.statusCode==200){
            this.service.toastService.success(response.message);
            this.closeDialog();
          }else{
            this.service.toastService.error(response.message);
          }
        },
        error:(error)=>{
          this.service.toastService.error(error);
        }
      })
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}

