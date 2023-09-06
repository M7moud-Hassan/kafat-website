import { NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
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

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }





// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
