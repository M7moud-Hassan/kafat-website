import {  Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserCategoryAddComponent } from '../user-category-add/user-category-add.component';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { UserCategory } from '../../services/user-category.service';
import { catchError, throwError } from 'rxjs';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';



@Component({
  selector: 'app-user-category-show',
  templateUrl: './user-category-show.component.html',
  styleUrls: ['./user-category-show.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class UserCategoryShowComponent implements OnInit {
  
  data: UserCategory[] = [];
  pageSize = 5;
  currentPage = 1;
  totalItems = 0; 
  displayedColumns: string[] = ["id",'name','description','actions'];
  dataSource = new MatTableDataSource<UserCategory>(this.data);

  constructor(public service:MainDashoardService) {}
  ngOnInit(): void {
    this.loadData();
  }

  refreshPage(){
    this.service.userCategoryService.getPage({
      "pageNumber":this.currentPage+1,
      "pageSize":this.pageSize
    }).pipe(
      catchError((error) => {
        console.error(error);
        this.service.toastService.error('افحص السرفر');
        return throwError(error);
      })
    ).subscribe((response) => {
      this.data = response.items;
      this.currentPage = response.page-1;
      this.pageSize = response.pageSize;
      this.totalItems = response.totalCount;
      this.dataSource= new MatTableDataSource<UserCategory>(this.data); 
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  

    this.service.userCategoryService.getPage({
      "pageNumber":this.currentPage+1,
      "pageSize":this.pageSize
    }).pipe(
      catchError((error) => {
        console.error(error);
        this.service.toastService.error('افحص السرفر');
        return throwError(error);
      })
    ).subscribe((response) => {
      this.data = response.items;
      this.currentPage = response.page-1;
      this.pageSize = response.pageSize;
      this.totalItems = response.totalCount;
      this.dataSource= new MatTableDataSource<UserCategory>(this.data); 
    });
  }


  loadData(): void {
    this.service.userCategoryService.getPage({
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
    const dialogRef = this.service.dialog.open(UserCategoryAddComponent, {
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
    const dialogRef = this.service.dialog.open(UserCategoryAddComponent, {
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
        name:category.name,
        title:'حذف تصنيف',
        label:'اسم التصنيف',
        submit:()=>{
          this.service.userCategoryService.delete(category.id).pipe(
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
