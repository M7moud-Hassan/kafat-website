import { Component, OnInit } from '@angular/core';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-informations',
  templateUrl: './contact-informations.component.html',
  styleUrls: ['./contact-informations.component.css']
})
export class ContactInformationsComponent implements OnInit {
  form:FormGroup = new FormGroup({});

  constructor(private service:MainDashoardService){}
  ngOnInit(): void {
    this.createForm();
    this.get();
  }
  createForm(){
    this. form = this.service.formBuilder.group({
      id:[0,[Validators.required]],
      title:['',[Validators.required]],
      location:['',[Validators.required]],
      email:['',[Validators.required]],
      facebookLink:['',[Validators.required]],
      whatsapp:['',[Validators.required]],
      twitterLink:['',[Validators.required]],
      instagramLink:['',[Validators.required]],
      telegramLink:['',[Validators.required]],
      snapchatLink:['',[Validators.required]],
      youtubeLink:['',[Validators.required]],
    });
  }
  get(){
    this.service.contactInformationService.get().subscribe({
      next:(res:ResponseVM)=>{
        if (res.statusCode == 200) {
          this.form.controls['title'].setValue(res.data.title);
          this.form.controls['location'].setValue(res.data.location);
          this.form.controls['email'].setValue(res.data.email);
          this.form.controls['facebookLink'].setValue(res.data.facebookLink);
          this.form.controls['whatsapp'].setValue(res.data.whatsapp);
          this.form.controls['twitterLink'].setValue(res.data.twitterLink);
          this.form.controls['instagramLink'].setValue(res.data.instagramLink);
          this.form.controls['telegramLink'].setValue(res.data.telegramLink);
          this.form.controls['snapchatLink'].setValue(res.data.snapchatLink);
          this.form.controls['youtubeLink'].setValue(res.data.youtubeLink);
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
 
  
  submit(){
    // this.service.printFormValues(this.form);
    this.service.contactInformationService.createOrUpdate(this.form.value).subscribe({
      next:(res:ResponseVM)=>{
        if (res.statusCode == 200) {
          if (res.data) {
            this.service.toastService.success(res.message);
          } 
          else {
            this.service.toastService.warning(res.message);
          }
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
