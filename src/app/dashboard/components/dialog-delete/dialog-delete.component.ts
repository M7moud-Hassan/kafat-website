import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserCategory } from '../../services/user-category.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {

constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,) {
    
}
closeDialog(): void {
  this.dialogRef.close();
}

submit(){
  
}
}
