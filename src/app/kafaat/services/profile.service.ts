import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseVM } from '../core/models/response-vm';
import { EditFieldRequest } from '../core/models/edit-field-request';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  controllerName:string = 'account';
  constructor(private http:HttpClient) {}
  register(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/register`,model);
  }
  editProfile(model:EditFieldRequest):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/edit-user-profile`,model);
  }
  uploadFile(model:FormData):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/upload-profile-file`,model);
  }
  getUserProfile(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/get-user-profile`,model);
  }
  changePassword(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/change-password`,model);
  }
  deleteAccount(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/delete-account`,model);
  }
}