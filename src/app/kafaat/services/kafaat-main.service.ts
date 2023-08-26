import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KafaatSharedService } from './kafaat-shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { ProfileService } from './profile.service';
import { BreadCrumbService } from './bread-crumb.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class KafaatMainService {

  constructor(
    private _formBuilder:FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _location:Location,
    private _sharedService:KafaatSharedService,
    private _profileService:ProfileService,
    private _breadCrumbService:BreadCrumbService,
    private _authService:AuthService,
    ) { }

  get formBuilder(): FormBuilder {
    return this._formBuilder;
  }
  get dialog(): MatDialog {
    return this._dialog;
  }
  get router(): Router {
    return this._router;
  }
  get sharedService(): KafaatSharedService {
    return this._sharedService;
  }
  get profileService(): ProfileService {
    return this._profileService;
  }
  get breadCrumbService(): BreadCrumbService {
    return this._breadCrumbService;
  }
  get authService(): AuthService {
    return this._authService;
  }




  get back(){
    return this._location.back();
  }
  printFormValues(myForm:FormGroup): void {
    let  i = 0;
    let displayedValues:String = "";
    for (const controlName in myForm.controls) {
      i++;
      if (myForm.controls.hasOwnProperty(controlName)) {
        displayedValues += `${i} - ${controlName}: ${myForm.controls[controlName].value} \n`;
        console.log(`${controlName}: ${myForm.controls[controlName].value}`);
      }
    }
    alert(displayedValues);
  }
}
