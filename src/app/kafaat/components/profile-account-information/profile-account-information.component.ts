import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from '../../core/models/response-vm';
import { IProfile } from '../../core/models/Iprofile';
import { FieldNames } from '../../core/static/field-names';
import { EditFieldRequest } from '../../core/models/edit-field-request';
import { CvImagePopupComponent } from 'src/app/shared/components/cv-image-popup/cv-image-popup.component';
import { PdfPopupComponent } from '../pdf-popup/pdf-popup.component';
import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { DateAdapter } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

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
  birthDateObj:any = {hijry:'',milady:''};

  constructor(private service:KafaatMainService,private http: HttpClient,private adminService:MainDashoardService,private dateProvider:DateAdapter<Date>,private jak:NgxMatDateAdapter<Date>){
    dateProvider.setLocale('ar-eg')
    jak.setLocale('ar-sa')
}

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
          this.getUserCvFile(this.profile.cvPath);
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
    window.location.reload();
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
    let _email = _user.id;
    let model = {"email":_email};
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
          this.displayHijriDateInItsFormat(this.profile.birthDateInHijri);
          this.getUserImage(this.profile.userImagePath);
          if(this.profile.cvPath == ""){
            this.fileSize = 0;
            this.errorMessage = 'لا توجد سيرة ذاتية تم اختيارها';
          }else{
            this.getUserCvFile(this.profile.cvPath);
          }
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
    let _email = this.service.authService.currentUser().id;
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
    else if(fieldName==FieldNames.Experience){
      newValue = this.profile.experience;
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
      fieldName==FieldNames.MiddleName || fieldName==FieldNames.LastName
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
  showPDFCv(cv:any){
    this.service.dialog.open(PdfPopupComponent,{
      width:'75%',
      height:'90%',
      data:{
        cvPdf:cv,
      }
    })
  }
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

  displayHijriDateInItsFormat(bithDateinAd:any){
    this.profile.birthDateInHijri = this.transformDateToArabic(bithDateinAd);
    // alert(this.profile.birthDateInHijri);
  }
  transformDateToArabic(date: string): string {
    date = date.slice(0,10);
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  
    const transformedDate = date.replace(/\d/g, (digit) => {
      return arabicDigits[parseInt(digit)];
    });
    let newTransformedDate = transformedDate.split('-');
    return `${newTransformedDate[0]}/${newTransformedDate[1]}/${newTransformedDate[2]}`;
  }

  loadPDF(): void {
    const pdfUrl = '';
    this.http.get(pdfUrl, { responseType: 'blob' }).subscribe((data) => {
      // Handle the PDF file data here, e.g., display it in an iframe or download it.
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url); // Opens the PDF in a new tab
    });
  }

  onChangeDate(evnt:any){
    const futureDate = evnt.value;
    // .format('YYYY-MM-DD');
    const y = futureDate.getFullYear();
    const d = futureDate.getDate();
    const m = futureDate.getMonth() + 1;
    
    const julianDay = this.gregorianToJulian(y, m, d);
    const { year, month, day } = this.julianToHijri(julianDay);
    this.profile.birthDateInHijri=`${year}-${month}-${day}`;
    
    let _m = month>9?`${month}`:`0${month}`;//1416-08-31 21:54:51.0000000
    let _d = day>9?`${day}`:`0${day}`;
    const updatedHijryDate = `${year}-${_m}-${_d} 00:00:00.0000000`;
    this.birthDateObj = {hijry: new Date(updatedHijryDate) ,milady:this.profile.birthDateInAD};
    this.displayHijriDateInItsFormat(this.profile.birthDateInHijri);
     this.editBirthDate();
  }
   hijriToJulian = (year:any, month:any, day:any) => {
    return (
      Math.floor((11 * year + 3) / 30) +
      Math.floor(354 * year) +
      Math.floor(30 * month) -
      Math.floor((month - 1) / 2) +
      day +
      1948440 -
      386
    );
  };
  
   gregorianToJulian = (year:any, month:any, day:any) => {
    if (month < 3) {
      year -= 1;
      month += 12;
    }
  
    const a = Math.floor(year / 100.0);
    const b = year === 1582 && (month > 10 || (month === 10 && day > 4))
        ? -10 :
        year === 1582 && month === 10
        ? 0 :
        year < 1583
        ? 0 :
        2 - a + Math.floor(a / 4.0);
  
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524;
  };
  
   julianToHijri = (julianDay:number) => {
    const y = 10631.0 / 30.0;
    const epochAstro = 1948084;
    const shift1 = 8.01 / 60.0;
  
     var z= julianDay - epochAstro;
    const cyc = Math.floor(z / 10631.0);
    z -= 10631 * cyc;
    const j = Math.floor((z - shift1) / y);
    z -= Math.floor(j * y + shift1);
  
    const year = 30 * cyc + j;
    let month = Math.floor((z + 28.5001) / 29.5);
    if (month === 13) {
      month = 12;
    }
  
    const day = z - Math.floor(29.5001 * month - 29);
  
    return { year: year, month: month, day: day };
  };
  
   julianToGregorian = (julianDate:any) => {
    let b = 0;
    if (julianDate > 2299160) {
      const a = Math.floor((julianDate - 1867216.25) / 36524.25);
      b = 1 + a - Math.floor(a / 4.0);
    }
  
    const bb = julianDate + b + 1524;
    let cc = Math.floor((bb - 122.1) / 365.25);
    const dd = Math.floor(365.25 * cc);
    const ee = Math.floor((bb - dd) / 30.6001);
  
    const day = bb - dd - Math.floor(30.6001 * ee);
    let month = ee - 1;
  
    if (ee > 13) {
      cc += 1;
      month = ee - 13;
    }
  
    const year = cc - 4716;
  
    return { year: (year), month: (month), day: (day) };
  };


  editBirthDate(){
    let _userEmail = this.service.authService.currentUser().email;
    let model = {email: _userEmail ,birthDateInHijri: this.birthDateObj.hijry ,birthDateInAD : this.birthDateObj.milady};
    this.service.profileService.editProfileBirthDate(model).subscribe({
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
