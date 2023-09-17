import { AfterViewInit, Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { PagedRequest } from 'src/app/kafaat/core/models/paged-request';
import { PagedResponse } from 'src/app/kafaat/core/models/paged-response';
import { UserRoles } from 'src/app/kafaat/core/user-roles';
import { userEmailModel, changeUserRoleModel } from '../../core/models/member-models';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { ConfirmPopUpComponent } from '../confirm-pop-up/confirm-pop-up.component';
import { UserProfilePopUpComponent } from '../user-profile-pop-up/user-profile-pop-up.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit ,AfterViewInit {
  windowWidth: number = 0;
  pageResponse:PagedResponse={page:1,pageSize:10,totalCount:0,hasNextPage:false,hasPreviousPage:false,items:[]};
  pagedRequest:PagedRequest = {pageNumber:1,pageSize:5,name:''};
  id:number
  constructor(public service:MainDashoardService,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{
      this.id=params['id']
    })
    this.pagedRequest= {pageNumber:1,pageSize:5,name:'',id:this.id};
  }
  ngOnInit(): void {
    this.getPage();
  }
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  getPageByName(){
    this.getPage(); 
  }

  changePageSize(){
    this.pagedRequest.pageNumber = 1;
    this.getPage();
  }
  changePageNumber(event:any){
    this.pagedRequest.pageNumber = event;
    this.getPage();
  }
  getPage(){
    this.service.activityParticipantsService.getPage(this.pagedRequest).subscribe({
      next:(res:PagedResponse)=>{
          this.pageResponse = res;
      }
    });
  }

  addDis(id:any){
    const element=  this.pageResponse.items.find((value:any)=>value.id==id);
    const dialogRef = this.service.dialog.open(ConfirmPopUpComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
      data:{
        id:element.id,
        name:element.userDisplayName,
        title:' جعل المستخدم متميزا لهذا النشاط',
        confirmationMessage:`هل حقاً تريد جعل المستخدم ${element.userDisplayName}  متميزا في هذا النشاط ؟`,
        submit:()=>{
          this.service.activityParticipantsService.addDis({UserId:element.userId,ActivityId:element.id}).pipe(
            catchError((error) => {
              console.error(error);
              this.service.toastService.error('افحص السيرفر');
              return throwError(error);
            })
          ).subscribe((response) => {
            if(response.statusCode == 200){
              this.service.toastService.success(response.message)
            }else{
              this.service.toastService.error(response.message);
            }
            this.getPage();
          });
        }
        ,
        fun:()=>{
           this.getPage();
        }
      },
    });
  }


  removeDis(id:any){
    const element=  this.pageResponse.items.find((value:any)=>value.id==id);
    const dialogRef = this.service.dialog.open(ConfirmPopUpComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
      data:{
        id:element.id,
        name:element.userDisplayName,
        title:'ازالة المستخدم من المتيميزون',
        confirmationMessage:`هل حقاً تريد ازالة المستخدم ${element.userDisplayName} من المتميزون؟`,
        submit:()=>{
          this.service.activityParticipantsService.removeDis({UserId:element.userId,ActivityId:element.id}).pipe(
            catchError((error) => {
              console.error(error);
              this.service.toastService.error('افحص السيرفر');
              return throwError(error);
            })
          ).subscribe((response) => {
            if(response.statusCode == 200){
              this.service.toastService.success(response.message)
            }else{
              this.service.toastService.error(response.message);
            }
            this.getPage();
          });
        }
        ,
        fun:()=>{
           this.getPage();
        }
      },
    });
  }
 
  viewUserProfile(id:any){
    const element=  this.pageResponse.items.find((value:any)=>value.id==id);
    const dialogRef = this.service.dialog.open(UserProfilePopUpComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'60%':'50%'),
      data:{
        email:element.email,
      }
    })
  }
}

