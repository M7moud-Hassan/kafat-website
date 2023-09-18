import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResponse } from 'src/app/kafaat/core/models/paged-response';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActivityParticipantsService {

  controllerName:string = 'ActivityParticipants';
  constructor(private http:HttpClient) { }
  getPage(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page`,data);
  }
  addDis(data:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/add-distinguished`,data);
  }
  removeDis(data:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/remove-distinguished`,data);
  }
  getAll(data:any):Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/get-all-participants/${data}`);
  }
}
