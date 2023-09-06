import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html',
  styleUrls: ['../add-country/add-country.component.css','./delete-country.component.css']
})
export class DeleteCountryComponent implements OnInit, AfterViewInit {
  id:number = 0 ;
  form:FormGroup = new FormGroup({});
  constructor(private service:MainDashoardService,private dialogRef: MatDialogRef<DeleteCountryComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
    this.id = data.id;
  }
  ngAfterViewInit(): void {
    this.loadData();
  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      id:[0,[Validators.required]],
      name:['',[Validators.required]],
    });
  }
  get name(){
    return this.form.controls['name'];
  }
  loadData(){
    this.service.countryService.getById(this.id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.form.patchValue(res.data);
        }else{
          this.service.toastService.error(res.error);
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
      this.service.countryService.delete(this.id).subscribe({
        next:(response:ResponseVM)=>{
          console.log(response);
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
