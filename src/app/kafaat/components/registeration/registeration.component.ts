import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from '../../core/models/response-vm';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','../profile-account-information/profile-account-information.component.css','./registeration.component.css']
})
export class RegisterationComponent   implements OnInit , AfterViewInit {
  isNextPageVisible:boolean = true;
  isPasswordVisible:boolean = false;
  isPasswordVisible2:boolean = false;
  isAvailableToWorkChecked:boolean = false;
  form:FormGroup = new FormGroup({});
  formData:FormData = new FormData();
  cv_file:any = "";
  user_Image:any = "";
  fileName:string="";
  fileSize:number=0;
  errorMessage:string = "";
  originalPassword: string = '';
  countries:any[]=[];
  cities:any[]=[];
  districts:any[]=[];
  familyBranches:any[]=[];
  distinguishedTypes:any[]=[];
  departments:any[]=[];
  qualifications:any[]=[];
  specializations:any[]=[];
  workTypes:any[]=[];
  userProfileImage:any;


  constructor(private service:KafaatMainService,private adminService:MainDashoardService){}
  ngAfterViewInit(): void {
    this.handleOriginalValue(this.form.controls['password'].value);
  }
  ngOnInit(): void {
    this.createForm();
    this.loadCountries();
    this.loadDistinguishedTypes();
    this.loadFamilyBranches();
    this.loadWorkTypes();
    this.loadQualifications();
    // this.cv_file = this.form.controls['cvFile'].value ?? this.imagefile ;
    // cvFile:[null,[Validators.required]],
    //   userImage:[null,[Validators.required]],
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
  handleOriginalValue(originalText: string) {
    this.originalPassword = originalText;
  }

  createForm(){
    this.form = this.service.formBuilder.group({
      email:['',[Validators.required]],
      phoneNumber:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      isApproved:[false,[Validators.required]],
      displayName:['',[Validators.required]],
      firstName:['',[Validators.required]],
      middleName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gender:['',[Validators.required]],
      identityNumber:['',[Validators.required]],
      distinguishedTypeId:[0,[Validators.required]],
      birthDateInHijri:['',[Validators.required]],
      birthDateInAD:['',[Validators.required]],
      countryId:[0,[Validators.required]],
      cityId:[0,[Validators.required]],
      districtId:[0,[Validators.required]],
      familyBranchId:[0,[Validators.required]],
      maritalStatus:['',[Validators.required]],
      isAvailableToWork:[true,[Validators.required]],
      qualificationId:[0,[Validators.required]],
      specializationId:[0,[Validators.required]],
      departmentId:[0,[Validators.required]],
      workTypeId:[0,[Validators.required]],
      hoppies:['',[Validators.required]],
      cvFile:[null,[Validators.required]],
      userImage:[null,[Validators.required]],
    });
  }
  onCvSelected(event: any) {
    const image = event.target.files[0];
     let checkResult = this.validateUplodedFile(image,true);
     if(checkResult!=''){
      this.errorMessage  = checkResult;
      return;
    }
    this.fileSize = image.size/(1024*1024);
    this.fileName = image.name;
     this.cv_file = URL.createObjectURL(image);
     this.form.controls['cvFile'].setValue(this.cv_file);
   this.formData.append('cvFile',image,"image-"+image.name.toString().replace(' ',''));
    
  }

  onUserImageSelected(event: any) {
    const image = event.target.files[0];
     let checkResult = this.validateUplodedFile(image);
     if(checkResult!=''){
      this.adminService.toastService.warning(checkResult);
      return;
    }
    this.userProfileImage = URL.createObjectURL(image);
     this.form.controls['userImage'].setValue(this.user_Image);
   this.formData.append('userImage',image,"image-"+image.name.toString().replace(' ',''));
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
     debugger;
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
  AppendFormToFormData():FormData{
    this.formData.append('email',this.email.value);
    this.formData.append('phoneNumber',this.phoneNumber.value);
    this.formData.append('password',this.password.value);
    this.formData.append('isApproved',this.isApproved.value);
    this.formData.append('displayName',this.displayName.value);
    this.formData.append('firstName',this.firstName.value);
    this.formData.append('middleName',this.middleName.value);
    this.formData.append('lastName',this.lastName.value);
    this.formData.append('gender',this.gender.value);
    this.formData.append('identityNumber',this.identityNumber.value);
    this.formData.append('distinguishedTypeId',this.distinguishedTypeId.value);
    this.formData.append('birthDateInHijri',this.birthDateInHijri.value);
    this.formData.append('birthDateInAD',this.birthDateInAD.value);
    this.formData.append('countryId',this.countryId.value);
    this.formData.append('cityId',this.cityId.value);
    this.formData.append('districtId',this.districtId.value);
    this.formData.append('familyBranchId',this.familyBranchId.value);
    this.formData.append('maritalStatus',this.maritalStatus.value);
    this.formData.append('isAvailableToWork',this.isAvailableToWork.value);
    this.formData.append('qualificationId',this.qualificationId.value);
    this.formData.append('specializationId',this.specializationId.value);
    this.formData.append('departmentId',this.departmentId.value);
    this.formData.append('workTypeId',this.workTypeId.value);
    this.formData.append('hoppies',this.hoppies.value);
    // this.formData.append('cvFile',this.cvFile.value);
    // this.formData.append('userImage',this.userImage.value);

    return this.formData;
  }
  
  submit() {
    debugger;
    // this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.profileService.register(this.AppendFormToFormData()).subscribe({
      // this.service.profileService.register(this.form.value).subscribe({
        next:(response:ResponseVM)=>{
          if(response.statusCode == 200){
            this.adminService.toastService.success(response.message);
          }else{
            this.adminService.toastService.error(response.message);
          }
        },
        error:(error)=>{
          this.adminService.toastService.error(error.error);
        }
      })
    }
  }
  back(){
    this.service.back;
  } 
  value1:any;
  isDate:boolean = true;
  pickBirthDataInMilady(event: any){
    event.target.value='12-12-2003';
    let originValues = event.target.value.split('-').reverse().join('-');
    console.log(originValues)
    this.value1 = originValues;
    // this.form.controls['birthDate'].setValue(originValues);
    return;
  }
  pickBirthDataInHijri(value: string){
    this.form.controls['birthDateHijry'].setValue(value);
  }

  get email(){
    return this.form.controls['email'];
  }
  get phoneNumber(){
    return this.form.controls['phoneNumber'];
  }
  get password(){
    return this.form.controls['password'];
  }
  get confirmPassword(){
    return this.form.controls['confirmPassword'];
  }
  get isApproved(){
    return this.form.controls['isApproved'];
  }
  get displayName(){
    return this.form.controls['displayName'];
  }
  get firstName(){
    return this.form.controls['firstName'];
  }
  get middleName(){
    return this.form.controls['middleName'];
  }
  get lastName(){
    return this.form.controls['lastName'];
  }
  get gender(){
    return this.form.controls['gender'];
  }
  get identityNumber(){
    return this.form.controls['identityNumber'];
  }
  get distinguishedTypeId(){
    return this.form.controls['distinguishedTypeId'];
  }
  get birthDateInHijri(){
    return this.form.controls['birthDateInHijri'];
  }
  get birthDateInAD(){
    return this.form.controls['birthDateInAD'];
  }
  get countryId(){
    return this.form.controls['countryId'];
  }
  get cityId(){
    return this.form.controls['cityId'];
  }
  get districtId(){
    return this.form.controls['districtId'];
  }
  get familyBranchId(){
    return this.form.controls['familyBranchId'];
  }
  get maritalStatus(){
    return this.form.controls['maritalStatus'];
  }
  get isAvailableToWork(){
    return this.form.controls['isAvailableToWork'];
  }
  get qualificationId(){
    return this.form.controls['qualificationId'];
  }
  get specializationId(){
    return this.form.controls['specializationId'];
  }
  get departmentId(){
    return this.form.controls['departmentId'];
  }
  get workTypeId(){
    return this.form.controls['workTypeId'];
  }
  get hoppies(){
    return this.form.controls['hoppies'];
  }
  get cvFile(){
    return this.form.controls['cvFile'];
  }
  get userImage(){
    return this.form.controls['userImage'];
  }
  get isPasswordFieldsIdentical():boolean{
    return this.password.value == this.confirmPassword.value;
  }

  changeCountry(){
    let id = this.countryId.value;
    this.loadCities(id);
  }
  changeCity(){
    let id = this.cityId.value;
    this.loadDistricts(id);
  }

  changeQualification(){
    let id = this.qualificationId.value;
    this.loadSpecializations(id);
  }
  changeSpecialization(){
    let id = this.specializationId.value;
    this.loadDepartments(id);
  }
  // file:[]=[];
  // // form_Data:FormData=new FormData();
  // onfileChange(event:any){
  //   this.file = event.target.files;
  //   for (let i = 0; i < this.file.length; i++) {
  //     this.formData.append("image"+i,this.file[i]);
  //   }
  // }
}

