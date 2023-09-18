import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { MainDashoardService } from '../../services/main-dashoard.service';

@Component({
  selector: 'app-add-images-activity',
  templateUrl: './add-images-activity.component.html',
  styleUrls: ['./add-images-activity.component.css']
})
export class AddImagesActivityComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  constructor(private service:MainDashoardService,private dialogRef: MatDialogRef<AddImagesActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    if(this.data.id){
      this.form = this.service.formBuilder.group({
        fileAttach:[this.data.path,[Validators.required]],
      });
    }else{
      this.form = this.service.formBuilder.group({
        fileAttach:[null,[Validators.required]],
      });
    }
  }
  get fileAttach(){
    return this.form.controls['fileAttach'];
  }

  fileIn:File;

  onFileSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileIn=file;
    }
  }

  
  submit() {
    if(this.form.valid){
        const formData = new FormData();
        formData.append('Path', this.fileIn);
        formData.append('title', 'image');
        formData.append('UploadedBy', '1');
        formData.append('ActivityId',this.data.activityId);
        formData.append('type','1');
       
        if(this.data.path){
          formData.append('id', this.data.id);
          this.service.attachmentsActivity.update(formData).subscribe({
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
        this.service.attachmentsActivity.add(formData).subscribe({
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
