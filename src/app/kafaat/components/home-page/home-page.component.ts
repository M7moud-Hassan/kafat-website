import { Component,ElementRef,Renderer2,Type,AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ContactInformationModel } from 'src/app/dashboard/core/models/contact-information-model';
import { DisplayContentComponent } from 'src/app/shared/components/display-content/display-content.component';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from '../../core/models/response-vm';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit, OnInit{
  showOverlay = false;
  homeImagePath:string = '/assets/images/Hero-image.png';
  contactInformationItems:ContactInformationModel = {
    id:0,
    email:'',
    facebookLink:'',
    instagramLink:'',
    location:'',
    snapchatLink:'',
    telegramLink:'',
    title:'',
    twitterLink:'',
    whatsapp:'',
    youtubeLink:'',
    linkedInLink:'',
    introductoryVideoLink:'',
    liveFeedLink:''
  };
  
  constructor(private adminService:MainDashoardService,private renderer: Renderer2, private el: ElementRef,private service:MainDashoardService) {
   
    
  }
  ngOnInit(): void {
    this.getMixData();
  }

  loadInformationContact(){
    this.service.contactInformationService.get().subscribe({
      next:(res:ResponseVM)=>{
        if (res.statusCode == 200) {
          this.contactInformationItems = res.data as ContactInformationModel;
        } 
        else {
          this.service.toastService.error(res.message);
        }
      },error:(error)=>{
        let errorMessage = 'حدث خطأ غير متوقع';
        if (error.error && typeof error.error === 'string') {
          errorMessage = error.error; // Use the error message from the 'error' property
        } else if (error.message) {
          errorMessage = error.message; // Use the 'message' property if available
        }
        this.service.toastService.error(errorMessage);
      }
    });
  }
  ngAfterViewInit(): void {
    this.playAnimation()
   
  }

  openOrClosNav(value:boolean):void{
    this.showOverlay=value;
  }
 

  component: Type<any> = DisplayContentComponent;

  playAnimation(){
    const elements = this.el.nativeElement.querySelectorAll('.top-anim');
    const elements2 = this.el.nativeElement.querySelectorAll('.top-30');
    elements.forEach((element:any) => {
      
      this.renderer.setStyle(element, 'top', '0');
    });

    elements2.forEach((element:any) => {
     if(window.innerWidth<720){
      this.renderer.setStyle(element, 'top', '-40px');
     }else{
      this.renderer.setStyle(element, 'top', '30%');
     }
    });
  }
  getMixData(){
    this.adminService.mixService.get().subscribe({
      next:(res:ResponseVM)=>{
       if(res.statusCode == 200){
        if(res.data.homeImagePath.length > 0){
          this.homeImagePath = res.data.homeImagePath;
        }
        // this.introductoryFilePath = res.data.introductoryFilePath;
       }
      }
    });
  }

  
}
