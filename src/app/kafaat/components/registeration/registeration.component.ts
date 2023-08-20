import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','../profile-account-information/profile-account-information.component.css','./registeration.component.css']
})
export class RegisterationComponent   implements OnInit , AfterViewInit {
  isNextPageVisible:boolean = true;
  isPasswordVisible:boolean = false;
  isPasswordVisible2:boolean = false;
  isAvailableToWorkChecked:boolean = true;
  form:FormGroup = new FormGroup({});
  imagefile:any = "";
  fileName:string="";
  fileSize:number=0;
  originalPassword: string = '';
  countries:any[]=[];
  cities:any[]=[];
  districts:any[]=[];
  familyBranches:any[]=[];
  distinguishedTypes:any[]=[];
  departments:any[]=[];
  qualifications:any[]=[];
  specialists:any[]=[];
  workTypes:any[]=[];


  constructor(private service:KafaatMainService){}
  ngAfterViewInit(): void {
    this.handleOriginalValue(this.form.controls['password'].value);
  }
  ngOnInit(): void {
    this.createForm();
    this.loadCountries();
    this.loadCities();
    this.loadDistricts();
    this.loadDistinguishedTypes();
    this.loadFamilyBranches();
    this.loadDepartments();
    this.loadSpecialists();
    this.loadWorkTypes();
    this.loadQualifications();
    this.imagefile = this.form.controls['image'].value ?? this.imagefile ;
  }
  loadCountries(){
    this.countries = this.service.profileService.loadContries();
  }
  loadCities(){
    this.cities = this.service.profileService.loadCities();
  }
  loadDistricts(){
    this.districts = this.service.profileService.loadDistricts();
  }
  loadFamilyBranches(){
    this.cities = this.service.profileService.loadFamilyBranches();
  }
  loadDistinguishedTypes(){
    this.districts = this.service.profileService.loaddifferences();
  }
  loadDepartments(){
    this.departments = this.service.profileService.loadDepartments();
  }
  loadQualifications(){
    this.qualifications = this.service.profileService.loadQualifications();
  }
  loadSpecialists(){
    this.specialists = this.service.profileService.loadSpecialists();
  }
  loadWorkTypes(){
    this.workTypes = this.service.profileService.loadWorkTypes();
  }
  handleOriginalValue(originalText: string) {
    this.originalPassword = originalText;
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      userId:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      firstName:['',[Validators.required]],
      middleName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gender:['',[Validators.required]],
      identityNumber:['',[Validators.required]],
      birthDate:['',[Validators.required]],
      birthDateHijry:['',[Validators.required]],
      // twitterLink:['',[Validators.required]],
      // facebookLink:['',[Validators.required]],
      maritalStatus:['',[Validators.required]],
      country:['',[Validators.required]],
      city:['',[Validators.required]],
      district:['',[Validators.required]],
      familyBranch:['',[Validators.required]],
      // nickName:['',[Validators.required]],
      // differences:['',[Validators.required]],
      isAvailableToWork:[false,[Validators.required]],
      qualification:['',[Validators.required]],
      specialization:['',[Validators.required]],
      department:['',[Validators.required]],
      workType:['',[Validators.required]],
      favourites:['',[Validators.required]],
      image:['',[Validators.required]],
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileSize= file.size/1000;
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagefile = URL.createObjectURL(file);
    };
    reader.readAsDataURL(file);
    this.form.controls['image'].setValue(this.imagefile);
  }
  
  submit() {
    // this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.profileService.editProfile(this.form.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  back(){
    this.service.back;
  } 
  value1:any;
  isDate:boolean = true;
  pickBirthDataInMilady(value: string){
    let originValues = value.split('-').reverse().join('-');
    this.value1 = originValues;
    this.form.controls['birthDate'].setValue(originValues);
    return;
  }
  pickBirthDataInHijri(value: string){
    this.form.controls['birthDateHijry'].setValue(value);
  }

  get userId(){
    return this.form.controls['userId'];
  }
  get userName(){
    return this.form.controls['userName'];
  }
  get email(){
    return this.form.controls['email'];
  }
  get phone(){
    return this.form.controls['phone'];
  }
  get password(){
    return this.form.controls['password'];
  }
  get confirmPassword(){
    return this.form.controls['confirmPassword'];
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
  get birthDate(){
    return this.form.controls['birthDate'];
  }
  get birthDateHijry(){
    return this.form.controls['birthDateHijry'];
  }
  get twitterLink(){
    return this.form.controls['twitterLink'];
  }
  get facebookLink(){
    return this.form.controls['facebookLink'];
  }
  get maritalStatus(){
    return this.form.controls['maritalStatus'];
  }
  get country(){
    return this.form.controls['country'];
  }
  get city(){
    return this.form.controls['city'];
  }
  get district(){
    return this.form.controls['district'];
  }
  get familyBranch(){
    return this.form.controls['familyBranch'];
  }
  get nickName(){
    return this.form.controls['nickName'];
  }
  get differences(){
    return this.form.controls['differences'];
  }
  get isAvailableToWork(){
    return this.form.controls['isAvailableToWork'];
  }
  get qualification(){
    return this.form.controls['qualification'];
  }
  get specialization(){
    return this.form.controls['specialization'];
  }
  get department(){
    return this.form.controls['department'];
  }
  get workType(){
    return this.form.controls['workType'];
  }
  get favourites(){
    return this.form.controls['favourites'];
  }
}

