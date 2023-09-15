import { AfterViewInit, Component, OnInit } from '@angular/core';
import { userEmailModel } from '../../core/models/member-models';
import { catchError, throwError } from 'rxjs';
import { ConfirmPopUpComponent } from '../confirm-pop-up/confirm-pop-up.component';
import { PagedResponse } from 'src/app/kafaat/core/models/paged-response';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { PagedRequest } from 'src/app/kafaat/core/models/paged-request';

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.component.html',
  styleUrls: ['./join-requests.component.css']
})
export class JoinRequestsComponent implements OnInit ,AfterViewInit {
  windowWidth: number = 0;
  pageResponse:PagedResponse={page:1,pageSize:10,totalCount:10,hasNextPage:false,hasPreviousPage:false,items:[]};
  pagedRequest:PagedRequest = {pageNumber:1,pageSize:5,name:''};
  constructor(public service:MainDashoardService) {
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
    this.service.membersService.getJoinRequestsPage(this.pagedRequest).subscribe({
      next:(res:PagedResponse)=>{
          this.pageResponse = res;
      }
    });
  }
  addItem(): void {
    // const dialogRef = this.service.dialog.open(AddCountryComponent, {
    //   width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%')
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.getPage();
    // });
  }
  editItem(id:any){
    // const dialogRef = this.service.dialog.open(EditCountryComponent, {
    //   width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
    //   data:{id:id}
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.getPage();
    // });
  }

  approveMembership(id:any){
    
    const element=  this.pageResponse.items.find((value:any)=>value.id==id);
    let model:userEmailModel = {email:element.email};
    alert(model.email);
    const dialogRef = this.service.dialog.open(ConfirmPopUpComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
      data:{
        id:element.id,
        name:element.name,
        title:'تأكيد قبول طلب',
        confirmationMessage:`هل حقاً تريد قبول عضوية ${element.email} فى نظام كفاءات`,
        submit:()=>{
          this.service.membersService.approveMembership(model).pipe(
            catchError((error) => {
              console.error(error);
              this.service.toastService.error('افحص السيرفر');
              return throwError(error);
            })
          ).subscribe((response) => {
            if(response.statusCode=="200"){
              this.service.toastService.success(response.message)
              this.getPage();
            }else{
              this.service.toastService.error(response.message);
            }
          });
        }
        ,
        fun:()=>{
           this.getPage();
        }
      },
    });
  }
}





