import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseVM } from '../core/models/response-vm';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  controllerName = 'Activity';
  constructor(private http:HttpClient) {

   }
   getAllDetails(id:any):Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/get-activity-details-id/${id}`)
   }
}
