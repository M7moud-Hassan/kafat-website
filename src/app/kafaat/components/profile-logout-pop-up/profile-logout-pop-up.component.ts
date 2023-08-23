import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-logout-pop-up',
  templateUrl: './profile-logout-pop-up.component.html',
  styleUrls: ['./profile-logout-pop-up.component.css']
})
export class ProfileLogoutPopUpComponent {
  constructor(public dialogRef: MatDialogRef<ProfileLogoutPopUpComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
