import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from '../../core/models/response-vm';
import { IProfile } from '../../core/models/Iprofile';
import { FieldNames } from '../../core/static/field-names';
import { EditFieldRequest } from '../../core/models/edit-field-request';
import { CvImagePopupComponent } from 'src/app/shared/components/cv-image-popup/cv-image-popup.component';

@Component({
  selector: 'app-profile-account-information',
  templateUrl: './profile-account-information.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','./profile-account-information.component.css']
})
export class ProfileAccountInformationComponent  implements OnInit, AfterViewInit {
  windowWidth: number = 0;
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
  userCvFile:any;
  isCountryChanged:boolean=false;
  isCityChanged:boolean=false;
  isQualificationChanged:boolean=false;
  isSpecializationChanged:boolean=false;
  isNewSelectedFile:boolean=true;

  constructor(private service:KafaatMainService,private adminService:MainDashoardService){}

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }
  onUserImageSelected(event: any) {
    const image = event.target.files[0];
     let checkResult = this.validateUplodedFile(image);
     if(checkResult!=''){
      this.adminService.toastService.warning(checkResult);
      return;
    }
    this.userProfileImage = URL.createObjectURL(image);

    const formData =  new FormData();
    let _userEmail = this.service.authService.currentUser().email;
    formData.append("Email",_userEmail);
    formData.append("FieldName",'UserImage');
    formData.append("NewValue",image);

    if(!(formData.has('Email') || formData.has('FieldName') || formData.has('NewValue'))){
      this.adminService.toastService.warning('البيانات غير مكتملة'); 
      return;
    }
    this.service.profileService.uploadFile(formData).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.adminService.toastService.success(res.message);
        }else{
          this.adminService.toastService.warning(res.message);
        }
      },error:(error)=>{
        let errorMessage = 'حدث خطأ غير متوقع';
        if (error.error && typeof error.error === 'string') {
          errorMessage = error.error; 
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.adminService.toastService.error(errorMessage);
      }
    });
  }
  onSelectedCVFile(event: any) {
    const image = event.target.files[0];
     let checkResult = this.validateUplodedFile(image,true);
     if(checkResult!=''){
      this.adminService.toastService.warning(checkResult);
      return;
    }
    this.userCvFile = URL.createObjectURL(image);

    const formData =  new FormData();
    let _userEmail = this.service.authService.currentUser().email;
    formData.append("Email",_userEmail);
    formData.append("FieldName",'CVImage');
    formData.append("NewValue",image);

    if(!(formData.has('Email') || formData.has('FieldName') || formData.has('NewValue'))){
      this.adminService.toastService.warning('البيانات غير مكتملة'); 
      return;
    }
    this.service.profileService.uploadFile(formData).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.adminService.toastService.success(res.message);
        }else{
          this.adminService.toastService.warning(res.message);
        }
      },error:(error)=>{
        let errorMessage = 'حدث خطأ غير متوقع';
        if (error.error && typeof error.error === 'string') {
          errorMessage = error.error; 
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.adminService.toastService.error(errorMessage);
      }
    });
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
  }
  valueEmitted(event: any) {
    this.isPasswordPageVisible = event;
  }
  loadCountries(){
    this.adminService.countryService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.countries = res.data;
          this.loadAllCitiesRelated(this.profile.countryId);
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadAllCitiesRelated(id:number){
    this.adminService.cityService.getAllByCountryId(id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.cities = res.data;
          this.loadAllDistrictRelated(this.profile.cityId);
        }else{
          this.adminService.toastService.error(res.message);
        }
      }
    });
  }
  loadAllDistrictRelated(id:number){
    this.adminService.districtService.getAllByCityId(id).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.districts = res.data;
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
          this.qualifications = res.data;
          this.loadRelatedSpecializations(this.profile.qualificationId);
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
          this.specializations = res.data;
          this.loadRelatedDepartments(this.profile.specializationId);
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
  loadRelatedSpecializations(id:any){
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
  loadRelatedDepartments(id:any){
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
    let _user = this.service.authService.currentUser();
    let _email = _user.email;
    let model = {"email":_email};
    // alert(User_Email);

    this.service.profileService.getUserProfile(model).subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode==200){
          this.profile = res.data as IProfile;
          this.loadCountries();
          this.loadAllCitiesRelated(this.profile.countryId);
          this.loadAllDistrictRelated(this.profile.cityId);

          this.loadFamilyBranches();
          this.loadDistinguishedTypes();
          this.loadWorkTypes();

          this.loadQualifications();
          this.loadRelatedSpecializations(this.profile.qualificationId);
          this.loadRelatedDepartments(this.profile.specializationId);
          this.getUserImage(this.profile.userImagePath);
          this.getUserCvFile(this.profile.cvPath);
          // this.fileName = this.profile.cvPath;
          // alert(this.fileName);
          // this.userProfileImage = this.profile.userImagePath;
          // alert(this.userProfileImage);
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
    else if(fieldName==FieldNames.District){
      this.isCityChanged = false;
      let address = {
        "countryId":this.profile.countryId,
        "cityId":this.profile.cityId,
        "districtId":this.profile.districtId,
      }
      newValue = address;
    }
    else if(fieldName==FieldNames.Department){
      this.isSpecializationChanged = false;
      let learning = {
        "qualificationId":this.profile.qualificationId,
        "specializationId":this.profile.specializationId,
        "departmentId":this.profile.departmentId,
      }
      newValue = learning;
    }
    let model:EditFieldRequest = {Email:_email,FieldName:fieldName,NewValue:newValue};
    if(fieldName==FieldNames.UserName || fieldName==FieldNames.Phone || fieldName==FieldNames.Email || fieldName==FieldNames.FirstName || 
      fieldName==FieldNames.MiddleName || fieldName==FieldNames.LastName || fieldName==FieldNames.TwitterLink || fieldName==FieldNames.FacebookLink
      || fieldName==FieldNames.IdentityNumber || fieldName==FieldNames.NickName || fieldName==FieldNames.Hoppies){
        if(model.NewValue==null || model.NewValue.length < 3){
          this.adminService.toastService.warning('القيمة المدخلة قصيرة جدا');
          return;
        }
      }
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
  getUserImage(img:any){
    if(img.includes("assets/male.png")){
      this.userProfileImage = '/assets/images/male.png'
    }else if(img.includes("assets/female.png")){
      this.userProfileImage= '/assets/images/female.png'
    }
    else{
      this.userProfileImage = img;
    }
  }
  getUserCvFile(cv:any){
    this.isNewSelectedFile = false;
    this.fileSize = 999;
    this.errorMessage = '';
    this.fileName = "السيرة الذاتية للعضو " + this.profile.firstName;
    this.userCvFile = cv;
  }
  showCV(){
    const cvFileName = this.profile.cvPath;
    if(cvFileName.toLowerCase().includes('.pdf')){
      this.showPDFCv(cvFileName);
    }else{
      this.showImageCv(cvFileName);
    }
  }
  showPDFCv(cv:any){}
  showImageCv(cv:any){
    const dialogRef = this.service.dialog.open(CvImagePopupComponent, {
      // width:this.windowWidth<767?'99%':(this.windowWidth<1300?'60%':'50%'),
      width:'75%',
      height:'90%',
      data:{
        cvImage:cv,
      }
    })
  }
}
