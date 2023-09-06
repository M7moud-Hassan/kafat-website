import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, throwError } from 'rxjs';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { UserCategory } from '../../services/user-category.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { UserCategoryAddComponent } from '../user-category-add/user-category-add.component';
import { TypeActivity } from '../../services/type-activity.service';
import { AddActivityComponent } from '../add-activity/add-activity.component';
import { AddActivityTypeComponent } from '../add-activity-type/add-activity-type.component';

@Component({
  selector: 'app-activity-types',
  templateUrl: './activity-types.component.html',
  styleUrls: ['./activity-types.component.css']
})
export class ActivityTypesComponent implements OnInit {
  
  data: TypeActivity[] = [];
  pageSize = 5;
  currentPage = 1;
  totalItems = 0; 
  displayedColumns: string[] = ["id",'type','description','actions'];
  dataSource = new MatTableDataSource<TypeActivity>(this.data);

  constructor(public service:MainDashoardService) {}
  ngOnInit(): void {
    this.loadData();
  }

  refreshPage(){
    this.service.typeActivity.getPage({
      "pageNumber":this.currentPage,
      "pageSize":this.pageSize
    }).pipe(
      catchError((error) => {
        console.error(error);
        this.service.toastService.error('افحص السرفر');
        return throwError(error);
      })
    ).subscribe((response) => {
      this.data = response.items;
     
      this.pageSize = response.pageSize;
      this.totalItems = response.totalCount;
      this.dataSource= new MatTableDataSource<TypeActivity>(this.data); 
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  

    this.service.typeActivity.getPage({
      "pageNumber": this.currentPage,
      "pageSize":this.pageSize
    }).pipe(
      catchError((error) => {
        console.error(error);
        this.service.toastService.error('افحص السرفر');
        return throwError(error);
      })
    ).subscribe((response) => {
      this.data = response.items;
      this.pageSize = response.pageSize;
      this.totalItems = response.totalCount;
      this.dataSource= new MatTableDataSource<TypeActivity>(this.data); 
    });
  }


  loadData(): void {
    this.service.typeActivity.getPage({
      "pageNumber":this.currentPage,
      "pageSize":this.pageSize
    }).pipe(
      catchError((error) => {
        console.error(error);
        this.service.toastService.error('افحص السرفر');
        return throwError(error);
      })
    ).subscribe((response) => {
      this.data = response.items;
      console.log(this.data);
      this.currentPage = response.page;
      this.pageSize = response.pageSize;
      this.totalItems = response.totalCount;
      this.dataSource.data=this.data;
    });


  }
 

  openDialog(): void {
    const dialogRef = this.service.dialog.open(AddActivityTypeComponent, {
      width:'50%',
      data:{fun:()=>{
        this.refreshPage();
      }}
    });
   
  }
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }

  editItem(id:number){
    const category=  this.dataSource.data.find(value=>value.id==id);
    const dialogRef = this.service.dialog.open(AddActivityTypeComponent, {
      width:'50%',
      data:{...category,fun:()=>{
        this.refreshPage()
      }}
    });
  }
  
  deleteItem(id:number){
    const category=  this.dataSource.data.find(value=>value.id==id);
    const dialogRef = this.service.dialog.open(DialogDeleteComponent, {
      width:'50%',
      data:{
        id:category.id,
        name:category.type,
        title:'حذف نوع نشاط',
        label:'اسم نوع نشاط',
        submit:()=>{
          this.service.typeActivity.delete(category.id).pipe(
            catchError((error) => {
              console.error(error);
              this.service.toastService.error('افحص السرفر');
              return throwError(error);
            })
          ).subscribe((response) => {
            if(response.statusCode=="200"){
              this.service.toastService.success(response.message)
              this.refreshPage()
            }else{
              this.service.toastService.error(response.message);
            }
          });
        }
        ,
        fun:()=>{
          this.refreshPage();
        }
      },
    });
  }
}
