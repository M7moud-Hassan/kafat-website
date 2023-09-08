import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { AddCountryComponent } from '../add-country/add-country.component';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  constructor(private service:MainDashoardService,private dialogRef: MatDialogRef<AddCountryComponent>){}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      name:['',[Validators.required]],
      image:[null,[Validators.required]],
    });
  }
  get name(){
    return this.form.controls['name'];
  }
  get image(){
    return this.form.controls['image'];
  }
  submit() {
    // this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.programsService.add(this.form.value).subscribe({
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
