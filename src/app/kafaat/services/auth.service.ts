import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ResponseVM } from '../core/models/response-vm';
import { environment } from 'src/environments/environment.prod';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  controllerName:string;
  constructor(private http:HttpClient,private service:MainDashoardService) {
    this.controllerName = 'account';
   }


  //  --------------------------------------------start-------------------------------------------------------------------------
 /*
  isLoggedIn = false;
  public User: any;
  private UserSource$ = new ReplaySubject<UserViewModel>(1);
  public User$ = this.UserSource$.asObservable();
  private jwt: JwtHelperService;
  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLoggedChanged = this.isLoggedSubject.asObservable();
  private sideMenuByRole = new BehaviorSubject<MenuConfig[]>(adminMenu);
  sideMenuByRolehanged = this.sideMenuByRole.asObservable();
  
  editIsLogged(islogged: boolean) {
    this.isLoggedSubject.next(islogged);
  }
  




  RefreshCurrentUser() {
    let token = this.GetToken();
    if (token) {
      // update app state
      this.User = this.DecodeTokenData(token);
      this.isLoggedIn = true;
    } else {
      this.service.router.navigate(['auth', 'login']);
    }
  }
  Logout() {
    // update app state
    this.User = null;
    this.isLoggedIn = false;
    //this.UserSource$.next(null);

    // remove both refreshToken & accessToken
    localStorage.removeItem('token');
    this.service.router.navigateByUrl('/');
    this.editIsLogged(false);
  }
  IsUserLoggenIn(): boolean {
    let token = this.GetToken();
    if (token) return !this.IsAccessTokenExpired();
    return false;
  }

  IsAccessTokenExpired(): boolean {
    var token = this.GetToken();
    if (token) return this.jwt.isTokenExpired(token);
    return false;
  }
  private SetOrUpdateToken(token: any) {
    localStorage.setItem('token', token);
  }
  private DecodeTokenData(token: any) {
    const decodedJWT = this.jwt.decodeToken(token);
    this.User = JSON.parse(decodedJWT.profile);
    this.UserSource$.next(this.User);
    return this.User;
  }

  public GetToken() {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      return accessToken;
    } else {
      return null;
    }
  }

  getUserId(){
      return this.DecodeTokenData(this.GetToken());
  }
  loggedIn(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser() {
    var token = this.GetToken();
    if (token) {
      const decodedJWT = this.jwt.decodeToken(token);
      let user = JSON.parse(decodedJWT.profile);
      return user;
    }
  }

  public EnableModule(roles: string[]): boolean {
    var token = this.GetToken();
    if (token) {
      const decodedJWT = this.jwt.decodeToken(token);
      return roles.includes(decodedJWT['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
    }
    return false;
  }
    */

  //  --------------------------------------------end-------------------------------------------------------------------------
  
  login(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/login`,model);
  }
  forgetPassword(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/forget-password`,model);
  }
  changePassword(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/change-password`,model);
  }
  validateSentCode(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseApiUrl}/${this.controllerName}/validate-sent-code`,model);
  }
}
