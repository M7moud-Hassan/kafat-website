import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivityService } from './activity.service';
import { CountryService } from './country.service';
import { CityService } from './city.service';
import { DistrictService } from './district.service';
import { ToastrService } from 'ngx-toastr';import { UserCategoryService } from './user-category.service';
import { TypeActivityService } from './type-activity.service';
import { ProgramsService } from './programs.service';
import { QualificationService } from './qualification.service';
import { SpecializationService } from './specialization.service';
import { DepartmentService } from './department.service';
import { WorkTypeService } from './work-type.service';
import { DistinguishedTypeService } from './distinguished-type.service';
import { FamilyBranchService } from './family-branch.service';
import { UploadFileService } from './upload-file.service';
import { AttachmentsActivityService } from './attachments-activity.service';
import { ContactInformationService } from './contact-information.service';
import { MembersService } from './members.service';
import { ActivityParticipantsService } from './activity-participants.service';
import { PostService } from './post.service';

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
    private _countryService:CountryService,
    private _cityService:CityService,
    private _districtService:DistrictService,
    private _toastService:ToastrService,
    private _userCategoryService:UserCategoryService,
    private _typeActivity :TypeActivityService,
    private _programsService :ProgramsService,
    private _qualificationService :QualificationService,
    private _specializationService :SpecializationService,
    private _departmentService :DepartmentService,
    private _workTypeService :WorkTypeService,
    private _distinguishedTypeService :DistinguishedTypeService,
    private _familyBranchService :FamilyBranchService,
    private _uploadFileService :UploadFileService,
    private _activityAttachments:AttachmentsActivityService,
    private _activityParticipants:ActivityParticipantsService,
    private _contactInformationService :ContactInformationService,
    private _membersService :MembersService,
    private _postService:PostService,
    ) { }

    get postService():PostService{
      return this._postService;
    }
   get activityParticipantsService(){
return this._activityParticipants;
    }
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
  

  get countryService(): CountryService {
    return this._countryService;
  }
  get programsService(): ProgramsService {
    return this._programsService;
  }
  get typeActivity(): TypeActivityService {
    return this._typeActivity;
  }
  get cityService(): CityService {
    return this._cityService;
  }
  get userCategoryService(): UserCategoryService {
    return this._userCategoryService;
  }
  get districtService(): DistrictService {
    return this._districtService;
  }
  get toastService(): ToastrService {
    return this._toastService;
  }
get attachmentsActivity():AttachmentsActivityService{
  return this._activityAttachments;
}
  get qualificationService(): QualificationService {
    return this._qualificationService;
  }
  get specializationService(): SpecializationService {
    return this._specializationService;
  }
  get departmentService(): DepartmentService {
    return this._departmentService;
  }

  get workTypeService(): WorkTypeService {
    return this._workTypeService;
  }
  get distinguishedTypeService(): DistinguishedTypeService {
    return this._distinguishedTypeService;
  }
  get familyBranchService(): FamilyBranchService {
    return this._familyBranchService;
  }
  get uploadFileService(): UploadFileService {
    return this._uploadFileService;
  }
  get contactInformationService(): ContactInformationService {
    return this._contactInformationService;
  }
  get membersService(): MembersService {
    return this._membersService;
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
