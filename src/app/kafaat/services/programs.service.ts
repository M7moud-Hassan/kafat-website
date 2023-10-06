import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseVM } from '../core/models/response-vm';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PagedResponse } from '../core/models/paged-response';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
    controllerName = 'Program';
  constructor(private http:HttpClient) { }
  geAll():Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/get-all`)
  }
  getActivities(id:any):Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/get-activities/${id}`)
  }
  getById(id:any):Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/get-by-id/${id}`)
  }
  getAllWinners(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page-all-distinguishs`,data);
  }
  getAllWinnersById(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page-all-distinguishs-by-id`,data);
  }
  getAllShares(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page-all-share`,data);
  }
  getAllSharesById(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page-all-share-by-id`,data);
  }
  getAllPosts(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page-all-posts`,data);
  }
  getAllPostsById(data:any):Observable<PagedResponse>{
    return this.http.post<PagedResponse>(`${environment.baseApiUrl}/${this.controllerName}/get-page-all-posts-by-id`,data);
  }
}
