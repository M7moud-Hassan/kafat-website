import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-delete-account-pop-up',
  templateUrl: './profile-delete-account-pop-up.component.html',
  styleUrls: ['./profile-delete-account-pop-up.component.css']
})
export class ProfileDeleteAccountPopUpComponent {
  constructor(public dialogRef: MatDialogRef<ProfileDeleteAccountPopUpComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
