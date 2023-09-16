import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  constructor(private service:MainDashoardService,private dialogRef: MatDialogRef<AddCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    if(this.data){
      this.form = this.service.formBuilder.group({
        Title:[this.data.title,[Validators.required]],
        Description:[this.data.description,[Validators.required]],
        ImageFile:[null,[Validators.required]],
        subTitle:[this.data.subTitle],
        imageDes:[null,[Validators.required]],
      });
    }else{
      this.form = this.service.formBuilder.group({
        Title:['',[Validators.required]],
        Description:['',[Validators.required]],
        ImageFile:[null,[Validators.required]],
        subTitle:['',[Validators.required]],
        imageDes:[null,[Validators.required]],
      });
    }
  }
  get subTitle(){
    return this.form.controls['subTitle'];
  }
  get Title(){
    return this.form.controls['Title'];
  }
  get imageDes(){
    return this.form.controls['imageDes'];
  }
  get ImageFile(){
    return this.form.controls['ImageFile'];
  }
  get Description(){
    return this.form.controls['Description'];
  }
  fileIn:File;
  fileInR:File;

  onFileSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileIn=file;
    }
  }

  onFileSelectedImageDes(event: any):void{
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileInR=file;
    }
  }
  
  submit() {
    // this.service.printFormValues(this.form);
    if(this.form.valid){
        const formData = new FormData();
        formData.append('Title', this.form.value.Title);
        formData.append('Description', this.form.value.Description);
        formData.append('ImageFile', this.fileIn);
        formData.append('CreatedBy', 'b70729f6-b640-4ac6-8e82-82151345b361');
        formData.append('SubTitle',this.form.value.subTitle);
        formData.append('ImageDesFile',this.fileInR);
        if(this.data){
          formData.append('id', this.data.id);
          this.service.programsService.update(formData).subscribe({
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
        }else{
          formData.append('id', '0');
        this.service.programsService.add(formData).subscribe({
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
    }else{
      this.service.toastService.error("افحص كل المطلوب");
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
