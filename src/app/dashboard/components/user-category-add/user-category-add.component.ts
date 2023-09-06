import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../user-category-show/user-category-show.component';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators } from '@angular/forms';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-user-category-add',
  templateUrl: './user-category-add.component.html',
  styleUrls: ['./user-category-add.component.css']
})
export class UserCategoryAddComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  constructor(private service:MainDashoardService,
    public dialogRef: MatDialogRef<UserCategoryAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private toastr: ToastrService) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.service.formBuilder.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
    });
  }
  get name(){
    return this.form.controls['name'];
  }
  get description(){
    return this.form.controls['description'];
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  submit(){
    this.dialogRef.close();
    this.service.userCategoryService.add(this.form.value).pipe(
      catchError((error) => {
        console.error(error);
        this.toastr.error('افحص السرفر');
        return throwError(error);
      })
    ).subscribe(respone=>{
      if(respone.statusCode=="200"){
        this.toastr.success(respone.message)
      }else{
        this.toastr.error(respone.message)
      }
    })
    
  }
}

