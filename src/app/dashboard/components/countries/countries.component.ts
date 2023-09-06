import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { AddCountryComponent } from '../add-country/add-country.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { PagedRequest } from 'src/app/kafaat/core/models/paged-request';
import { SimpleModel } from 'src/app/kafaat/core/models/simple-model';
import { PagedResponse } from 'src/app/kafaat/core/models/paged-response';
import { EditCountryComponent } from '../edit-country/edit-country.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit ,AfterViewInit {
  windowWidth: number = 0;
  pageData:SimpleModel[]=[];
  pageResponse:PagedResponse={page:1,pageSize:10,totalCount:10,hasNextPage:false,hasPreviousPage:false,items:[]};
  pagedRequest:PagedRequest = {pageNumber:1,pageSize:10};
  dataSource:any;
  displayedColumns: string[] = ['id', 'name','actions'];

  constructor(public service:MainDashoardService) {
  }
  ngOnInit(): void {
    this.getPage();
  }
  changePage(event:PageEvent){
    this.pagedRequest.pageNumber = event.pageIndex;
    this.pagedRequest.pageSize = event.pageSize;
    // alert("page number "+this.pagedRequest.pageNumber);
    // alert("page size : "+this.pagedRequest.pageSize)
    this.getPage();
  }
  openDialog(): void {
    const dialogRef = this.service.dialog.open(AddCountryComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%')
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  @ViewChild(MatPaginator) paginator: MatPaginator ;

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
    // this.getPage();
    this.dataSource.paginator = this.paginator;
  }
  getPage(){
    this.service.countryService.getPage(this.pagedRequest).subscribe({
      next:(res:PagedResponse)=>{
          this.pageData = res.items;
          this.dataSource = new MatTableDataSource<SimpleModel>(this.pageData);
          this.pageResponse = res;
          // alert("this.pageResponse.page : "+this.pageResponse.page);
          // alert("this.pageResponse.pageSize : "+this.pageResponse.pageSize);
          // alert("this.pageResponse.totalCount : "+this.pageResponse.totalCount);
      }
    });
  }
  editItem(id:any){
    const dialogRef = this.service.dialog.open(EditCountryComponent, {
      width:this.windowWidth<767?'99%':(this.windowWidth<1300?'50%':'40%'),
      data:{id:id}
    });
  }
  deleteItem(id:any){}
}



