import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PagedRequest } from 'src/app/kafaat/core/models/paged-request';
import { PagedResponse } from 'src/app/kafaat/core/models/paged-response';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { AddDistrictComponent } from '../add-district/add-district.component';
import { EditDistrictComponent } from '../edit-district/edit-district.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { EditDepartmentComponent } from '../edit-department/edit-department.component';
import { AddDepartmentComponent } from '../add-department/add-department.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit ,AfterViewInit {
  windowWidth: number = 0;
  pageResponse:PagedResponse={page:1,pageSize:10,totalCount:0,hasNextPage:false,hasPreviousPage:false,items:[]};
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
    this.service.departmentService.getPage(this.pagedRequest).subscribe({
      next:(res:PagedResponse)=>{
          this.pageResponse = res;
      }
    });
  }
  addItem(): void {
    const dialogRef = this.service.dialog.open(AddDepartmentComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%')
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPage();
    });
  }
  editItem(id:any){
    const dialogRef = this.service.dialog.open(EditDepartmentComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
      data:{id:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPage();
    });
  }

  deleteItem(id:number){
    const element=  this.pageResponse.items.find((value:any)=>value.id==id);
    const dialogRef = this.service.dialog.open(DialogDeleteComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
      data:{
        id:element.id,
        name:element.name,
        title:'حذف قسم',
        label:'اسم القسم',
        submit:()=>{
          this.service.departmentService.delete(element.id).pipe(
            catchError((error) => {
              console.error(error);
              this.service.toastService.error('افحص السيرفر');
              return throwError(error);
            })
          ).subscribe((response) => {
            if(response.statusCode=="200"){
              this.service.toastService.success(response.message)
              this.pagedRequest.name='';
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
    dialogRef.afterClosed().subscribe(result => {
      this.pagedRequest.name='';
      this.getPage();
    });
  }
}



