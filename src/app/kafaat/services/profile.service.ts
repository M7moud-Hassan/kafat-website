import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseVM } from '../core/models/response-vm';
import { IProfile } from '../core/models/Iprofile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  controllerName:string;
  constructor(private http:HttpClient) {
    this.controllerName = '';
   }
  
  editProfile(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/`,model);
  }
  loadProfileData(model:any):IProfile{
    return {
      userId:783,
      userName:'محمد حسن احمد',
      email:'mah7252@gmail.com',
      firstName:'محمد',
      middleName:'احمد',
      lastName:'حسن',
      nickName:'احمد حسن',
      password:'278627@##$290',
      phone:'+20 1298378373',
      birthDate:'12/12/1990',
      birthDateHijry:'10/05/1400',
      country:2,
      city:3,
      district:5,
      department:7,
      differences:3,
      facebookLink:'facebooklink267822',
      twitterLink:'twitter-link-7826827',
      familyBranch:7,
      favourites:'السباحة',
      gender:'male',
      identityNumber:'296653675376536753',
      isAvailableToWork:true,
      maritalStatus:'married',
      qualification:9,
      specialization:10,
      workType:2,
      image:'',
    };
  }
  loadContries(){
    return [
      {id:1,name:'دولة رقم 1'},
      {id:2,name:'دولة رقم 2'},
      {id:3,name:'دولة رقم 3'},
      {id:4,name:'دولة رقم 4'},
      {id:5,name:'دولة رقم 5'},
      {id:6,name:'دولة رقم 6'},
      {id:7,name:'دولة رقم 7'},
      {id:8,name:'دولة رقم 8'},
      {id:9,name:'دولة رقم 9'},
      {id:10,name:'دولة رقم 10'},
    ];
  }
  loadCities(){
    return [
      {id:1,name:'مدينة رقم 1'},
      {id:2,name:'مدينة رقم 2'},
      {id:3,name:'مدينة رقم 3'},
      {id:4,name:'مدينة رقم 4'},
      {id:5,name:'مدينة رقم 5'},
      {id:6,name:'مدينة رقم 6'},
      {id:7,name:'مدينة رقم 7'},
      {id:8,name:'مدينة رقم 8'},
      {id:9,name:'مدينة رقم 9'},
      {id:10,name:'مدينة رقم 10'},
    ]
  }
  loadDistricts(){
    return [
      {id:1,name:'مقاطعة رقم 1'},
      {id:2,name:'مقاطعة رقم 2'},
      {id:3,name:'مقاطعة رقم 3'},
      {id:4,name:'مقاطعة رقم 4'},
      {id:5,name:'مقاطعة رقم 5'},
      {id:6,name:'مقاطعة رقم 6'},
      {id:7,name:'مقاطعة رقم 7'},
      {id:8,name:'مقاطعة رقم 8'},
      {id:9,name:'مقاطعة رقم 9'},
      {id:10,name:'مقاطعة رقم 10'},
    ]
  }
  loadFamilyBranches(){
    return [
      {id:1,name:'فرع رقم 1'},
      {id:2,name:'فرع رقم 2'},
      {id:3,name:'فرع رقم 3'},
      {id:4,name:'فرع رقم 4'},
      {id:5,name:'فرع رقم 5'},
      {id:6,name:'فرع رقم 6'},
      {id:7,name:'فرع رقم 7'},
      {id:8,name:'فرع رقم 8'},
      {id:9,name:'فرع رقم 9'},
      {id:10,name:'فرع رقم 10'},
    ]
  }
  loaddifferences(){
    return [
      {id:1,name:'وجه التميز رقم 1'},
      {id:2,name:'وجه التميز رقم 2'},
      {id:3,name:'وجه التميز رقم 3'},
      {id:4,name:'وجه التميز رقم 4'},
      {id:5,name:'وجه التميز رقم 5'},
      {id:6,name:'وجه التميز رقم 6'},
      {id:7,name:'وجه التميز رقم 7'},
      {id:8,name:'وجه التميز رقم 8'},
      {id:9,name:'وجه التميز رقم 9'},
      {id:10,name:'وجه التميز رقم 10'},
    ]
  }
  loadQualifications(){
    return [
      {id:1,name:'مؤهل رقم 1'},
      {id:2,name:'مؤهل رقم 2'},
      {id:3,name:'مؤهل رقم 3'},
      {id:4,name:'مؤهل رقم 4'},
      {id:5,name:'مؤهل رقم 5'},
      {id:6,name:'مؤهل رقم 6'},
      {id:7,name:'مؤهل رقم 7'},
      {id:8,name:'مؤهل رقم 8'},
      {id:9,name:'مؤهل رقم 9'},
      {id:10,name:'مؤهل رقم 10'},
    ]
  }
  loadSpecialists(){
    return [
      {id:1,name:'التخصص رقم 1'},
      {id:2,name:'التخصص رقم 2'},
      {id:3,name:'التخصص رقم 3'},
      {id:4,name:'التخصص رقم 4'},
      {id:5,name:'التخصص رقم 5'},
      {id:6,name:'التخصص رقم 6'},
      {id:7,name:'التخصص رقم 7'},
      {id:8,name:'التخصص رقم 8'},
      {id:9,name:'التخصص رقم 9'},
      {id:10,name:'التخصص رقم 10'},
    ]
  }
  loadDepartments(){
    return [
      {id:1,name:'القسم رقم 1'},
      {id:2,name:'القسم رقم 2'},
      {id:3,name:'القسم رقم 3'},
      {id:4,name:'القسم رقم 4'},
      {id:5,name:'القسم رقم 5'},
      {id:6,name:'القسم رقم 6'},
      {id:7,name:'القسم رقم 7'},
      {id:8,name:'القسم رقم 8'},
      {id:9,name:'القسم رقم 9'},
      {id:10,name:'القسم رقم 10'},
    ]
  }
  loadWorkTypes(){
    return [
      {id:1,name:'العمل رقم 1'},
      {id:2,name:'العمل رقم 2'},
      {id:3,name:'العمل رقم 3'},
      {id:4,name:'العمل رقم 4'},
      {id:5,name:'العمل رقم 5'},
      {id:6,name:'العمل رقم 6'},
      {id:7,name:'العمل رقم 7'},
      {id:8,name:'العمل رقم 8'},
      {id:9,name:'العمل رقم 9'},
      {id:10,name:'العمل رقم 10'},
    ]
  }
  changePassword(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/`,model);
  }

}
