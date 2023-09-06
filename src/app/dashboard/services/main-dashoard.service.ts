import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivityService } from './activity.service';
import { ActivityTypesService } from './activity-types.service';
import { CountryService } from './country.service';
import { CityService } from './city.service';
import { DistrictService } from './district.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MainDashoardService {

  constructor(
    private _formBuilder:FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _location:Location,
    private _activityService:ActivityService,
    private _activityTypesService:ActivityTypesService,
    private _countryService:CountryService,
    private _cityService:CityService,
    private _districtService:DistrictService,
    private _toastService:ToastrService,
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
  get activityService(): ActivityService {
    return this._activityService;
  }
  get activityTypesService(): ActivityTypesService {
    return this._activityTypesService;
  }
  get countryService(): CountryService {
    return this._countryService;
  }
  get cityService(): CityService {
    return this._cityService;
  }
  get districtService(): DistrictService {
    return this._districtService;
  }
  get toastService(): ToastrService {
    return this._toastService;
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
