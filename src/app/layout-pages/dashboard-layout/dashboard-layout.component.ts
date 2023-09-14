import { Component, OnInit,AfterViewInit } from '@angular/core';
import { UserData } from 'src/app/kafaat/core/models/UserData';
import { AuthService } from 'src/app/kafaat/services/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit {
  user:UserData = {} as UserData;
  apiURL:string = environment.baseApiUrl;
  userProfileImage:any;
  constructor(private authService:AuthService){}
  ngAfterViewInit(): void {
    this.getCurrentUSer();
  }
  ngOnInit(): void {
  }

  getCurrentUSer(){
    this.user = this.authService.currentUser();
    if(this.user.userImage.includes("assets/male.png")){
      this.userProfileImage = '/assets/images/male.png'
    }else if(this.user.userImage.includes("assets/female.png")){
      this.userProfileImage= '/assets/images/female.png'
    }
    else{
      this.userProfileImage = this.user.userImage;
    }
  }
  logout(){
    this.authService.logout();
  }

}
