import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KafaatMainService } from '../../services/kafaat-main.service';
import * as XLSX from 'xlsx';

const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-manshat-details',
  templateUrl: './manshat-details.component.html',
  styleUrls: ['./manshat-details.component.css']
})
export class ManshatDetailsComponent implements OnInit {
  tabNumberIsActive:number = 0;
  navigationItemsList:any[]=[];
  id:number
  attchments:any[]=[]
  images:any[]=[]
  activity:any
  videos:any
  isUserCaterory=false;
  @ViewChild('alert', { static: false }) myElement: ElementRef;

  constructor(private service:KafaatMainService,private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe(param=>{
      this.id=param['id']
    })
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    
    var idPart='';
   try{
    var idPart=this.service.authService.currentUser().id;
   }catch(e){

   }

    this.service.activityService.getAllDetails({id:this.id,idParti:idPart}).subscribe(response=>{
      if(response.statusCode=='200'){
  console.log("data",response.data);
  
        
        this.activity=response.data
        this.attchments=this.activity.attachments;
        this.images=this.activity.images

       this.videos=this.activity.videos
       
       
      }
    })
  }

  JoinActivity(){
    try{
    this.service.activityParticipantsService.add({ActivityId:this.id,ParticipantId:this.service.authService.currentUser().id}).subscribe(response=>{
      if(response.statusCode=='200'){
      this.service.toastService.success(response.message);
      this.activity.isParticipant=true;
      }else{
        this.service.toastService.error(response.message); 
      }
    })
  }catch(e){
  this.router.navigate(['/login'])
  }
  }

  onTabSelected(index:any){
    this.tabNumberIsActive = index;
  }
  hideAlert(){
    this.myElement.nativeElement.style.display = 'none';
  }

  exportToExcel(): void {
    this.service.activityParticipantsService.getParticipants(this.id).subscribe(res=>{
      if(res.statusCode=='200'){
        
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(res.data);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Generate a base64-encoded string containing the Excel file data
  const base64Data = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });

  // Convert the base64 string to a Blob
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  // Create a download link and trigger a click to download the file
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  a.href = url;
  a.download = 'data.xlsx';
  a.click();
  window.URL.revokeObjectURL(url);
        
      }
    })
    
  }
  checkLogin():boolean{
    try{
      this.service.authService.currentUser().id;
      return true;
    }catch(e){
      return false;
    }
  }

  checkUserCategory():boolean{
   var userCategoryName = this.service.authService.currentUser().userCategoryName;
   return this.activity.userCategories.includes(userCategoryName);
  }
}


