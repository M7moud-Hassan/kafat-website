import {  Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserCategoryAddComponent } from '../user-category-add/user-category-add.component';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { UserCategory } from '../../services/user-category.service';
import { catchError, throwError } from 'rxjs';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-user-category-show',
  templateUrl: './user-category-show.component.html',
  styleUrls: ['./user-category-show.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class UserCategoryShowComponent implements OnInit {
  animal: string;
  name: string;
  data: UserCategory[] = [];
  pageSize = 5;
  currentPage = 1;
  totalItems = 0; 
  displayedColumns: string[] = ["id",'name','description'];
  dataSource = new MatTableDataSource<UserCategory>(this.data);

  constructor(public service:MainDashoardService) {}
  ngOnInit(): void {
    this.loadData();
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log(this.currentPage);
    console.log(this.pageSize)

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
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }

  
}
