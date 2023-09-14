import { Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from '../../core/models/response-vm';
import { IProfile } from '../../core/models/Iprofile';
import { FieldNames } from '../../core/static/field-names';
import { EditFieldRequest } from '../../core/models/edit-field-request';

@Component({
  selector: 'app-profile-account-information',
  templateUrl: './profile-account-information.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','./profile-account-information.component.css']
})
export class ProfileAccountInformationComponent  implements OnInit {
  isPasswordPageVisible:boolean = false;
  profile:IProfile={} as IProfile;
  imagefile:any = "";
  fileName:string="";
  fileSize:number=0;
  errorMessage:string = "";
  countries:any[]=[];
  cities:any[]=[];
  districts:any[]=[];
  familyBranches:any[]=[];
  distinguishedTypes:any[]=[];
  departments:any[]=[];
  qualifications:any[]=[];
  specializations:any[]=[];
  workTypes:any[]=[];
  userProfileImage:string = '/assets/images/male.png';

  constructor(private service:KafaatMainService,private adminService:MainDashoardService){}

  onUserImageSelected(event: any) {
    const image = event.target.files[0];
     let checkResult = this.validateUplodedFile(image);
     if(checkResult!=''){
      this.adminService.toastService.warning(checkResult);
      return;
    }
    this.userProfileImage = URL.createObjectURL(image);
    //  this.form.controls['userImage'].setValue(image);
  }
  validateUplodedFile(image:any,isCv:boolean = false):string{
    let imageError = "";
    let maxLimitedSize = 1024*1024*10;
    let _fileSize = image.size;  //in MB
    if(_fileSize>maxLimitedSize){
      imageError = "حجم الملف يتجاوز الحد المسموح به";
      return imageError;
    }
    let fileName = image.name;
     let fileArray:String = fileName.replace(' ','').split(".");
     let fileExtension = fileArray[fileArray.length-1].toLowerCase().toString();
    //  debugger;
    if (isCv) {
      if (fileExtension != "jpg" && fileExtension != "png" && fileExtension != "jpeg" && fileExtension != "pdf") {
        imageError = "نوع الملف  غير مسموح به";
        return imageError;
      }
    }
    else {
      if (fileExtension != "jpg" && fileExtension != "png" && fileExtension != "jpeg") {
        imageError = "نوع الملف  غير مسموح به";
        return imageError;
      }
    }
    return imageError;
  }
  ngOnInit(): void {
    this.isPasswordPageVisible = false;
    this.loadProfile();
    this.loadCountries();
    this.loadAllCities();
    this.loadAllDistrict();
    this.loadFamilyBranches();
    this.loadDistinguishedTypes();
    this.loadWorkTypes();
    this.loadQualifications();
    this.loadAllSpecializations();
    this.loadAllDepartments();
  }
  valueEmitted(event: any) {
    this.isPasswordPageVisible = event;
  }
  loadCountries(){
    this.adminService.countryService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.countries = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadAllCities(){
    this.adminService.cityService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.cities = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadAllDistrict(){
    this.adminService.districtService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.districts = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadFamilyBranches(){
    this.adminService.familyBranchService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.familyBranches = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadDistinguishedTypes(){
    this.adminService.distinguishedTypeService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.distinguishedTypes = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadQualifications(){
    this.adminService.qualificationService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.qualifications = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadAllSpecializations(){
    this.adminService.specializationService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.specializations = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadAllDepartments(){
    this.adminService.departmentService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.departments = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadSpecializations(id:any){
    this.adminService.specializationService.getAllByQualificationId(id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.specializations = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadDepartments(id:any){
    this.adminService.departmentService.getAllBySpecializationId(id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.departments = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadWorkTypes(){
   this.adminService.workTypeService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.workTypes = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadCities(id:any){
    this.adminService.cityService.getAllByCountryId(id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.cities = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadDistricts(id:any){
      this.adminService.districtService.getAllByCityId(id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.districts = res.data
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadProfile(){
    let _email = this.service.authService.currentUser().email;
    let model = {"email":_email};
    // alert(User_Email);
    this.service.profileService.getUserProfile(model).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.profile = res.data as IProfile;
        }else{
          this.adminService.toastService.error(res.message);
        }
      },error:(error)=>{
        let errorMessage = 'حدث خطأ غير متوقع';
        if (error.error && typeof error.error === 'string') {
          errorMessage = error.error; // Use the error message from the 'error' property
        } else if (error.message) {
          errorMessage = error.message; // Use the 'message' property if available
        }
        this.adminService.toastService.error(errorMessage);
      }
    });
  }
  onFileSelected(event: any) {
    this.errorMessage = "";
    const file: File = event.target.files[0];
    this.fileSize = file.size / (1024 * 1024);  //in MB
    this.fileName = file.name;
    if(this.fileSize.toFixed(2) > '10.00'){
      this.errorMessage = "حجم الملف يتجاوز الحد المسموح به";
      return;
    }
     let fileExtension:String = this.fileName.replace(".","").split(".")[1].toLowerCase().toString();
    if(fileExtension!="jpg" || fileExtension != "png" || fileExtension != "pdf"){
      this.errorMessage = "نوع الملف  غير مسموح به";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.imagefile = URL.createObjectURL(file);
    };
    reader.readAsDataURL(file);
    // this.form.controls['image'].setValue(this.imagefile);
  } 
  back(){
    this.service.back;
  } 
  EditField(fieldName:string){
    let _email = this.service.authService.currentUser().email;
    let newValue:any ;
    if(fieldName==FieldNames.UserName){
      newValue = this.profile.displayName;
    }
    else if(fieldName==FieldNames.Phone){
      newValue = this.profile.phoneNumber;
    }
    else if(fieldName==FieldNames.Email){
      newValue = this.profile.email;
    }
    else if(fieldName==FieldNames.FirstName){
      newValue = this.profile.firstName;
    }
    else if(fieldName==FieldNames.MiddleName){
      newValue = this.profile.middleName;
    }
    else if(fieldName==FieldNames.LastName){
      newValue = this.profile.lastName;
    }
    else if(fieldName==FieldNames.IdentityNumber){
      newValue = this.profile.identityNumber;
    }
    else if(fieldName==FieldNames.FacebookLink){
      newValue = this.profile.facebookLink;
    }
    else if(fieldName==FieldNames.TwitterLink){
      newValue = this.profile.twitterLink;
    }
    else if(fieldName==FieldNames.NickName){
      newValue = this.profile.nickName;
    }
    else if(fieldName==FieldNames.Hoppies){
      newValue = this.profile.hoppies;
    }else if(fieldName==FieldNames.IsAvailableToWork){
      newValue = this.profile.isAvailableToWork;
    }
    else if(fieldName==FieldNames.Gender){
      newValue = this.profile.gender;
    }
    else if(fieldName==FieldNames.MaritalStatus){
      newValue = this.profile.maritalStatus;
    }
    else if(fieldName==FieldNames.BirthDateInAD){
      newValue = this.profile.birthDateInAD;
    }
    else if(fieldName==FieldNames.BirthDateInHijri){
      newValue = this.profile.birthDateInHijri;
    }
    else if(fieldName==FieldNames.FamilyBranch){
      newValue = this.profile.familyBranchId;
    }
    else if(fieldName==FieldNames.WorkType){
      newValue = this.profile.workTypeId;
    }
    else if(fieldName==FieldNames.DistinguishedType){
      newValue = this.profile.distinguishedTypeId;
    }
    let model:EditFieldRequest = {Email:_email,FieldName:fieldName,NewValue:newValue};
    this.service.profileService.editProfile(model).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.adminService.toastService.success(res.message);
        }else{
          this.adminService.toastService.warning(res.message);
        }
      },error:(error)=>{
        let errorMessage = 'حدث خطأ غير متوقع';
        if (error.error && typeof error.error === 'string') {
          errorMessage = error.error; // Use the error message from the 'error' property
        } else if (error.message) {
          errorMessage = error.message; // Use the 'message' property if available
        }
        this.adminService.toastService.error(errorMessage);
      }
    });
  }
}
