import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContactInformationModel } from 'src/app/dashboard/core/models/contact-information-model';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year:any;
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
  };
  constructor(private service:MainDashoardService){
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.get();
  }
  

  get(){
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
 
}
