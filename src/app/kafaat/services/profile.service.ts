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
      department:'Information technology',
      differences:'Not Exists',
      facebookLink:'facebooklink267822',
      twitterLink:'twitter-link-7826827',
      familyBranch:'قبيلة العراف',
      favourites:'السباحة',
      gender:'male',
      identityNumber:'296653675376536753',
      isAvailableToWork:true,
      maritalStatus:'married',
      qualification:'Computer Sience',
      specialization:'IS',
      workType:'Software',
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
  changePassword(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/`,model);
  }

}
