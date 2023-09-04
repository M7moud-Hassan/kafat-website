import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../user-category-show/user-category-show.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-category-add',
  templateUrl: './user-category-add.component.html',
  styleUrls: ['./user-category-add.component.css']
})
export class UserCategoryAddComponent {
  constructor(
    public dialogRef: MatDialogRef<UserCategoryAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private toastr: ToastrService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    this.dialogRef.close();
    this.toastr.success('تم اضافة العنصر بنجاح')
  }
}

