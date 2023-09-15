import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { AddContactInformationComponent } from '../add-contact-information/add-contact-information.component';
import { EditContactInformationComponent } from '../edit-contact-information/edit-contact-information.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { catchError, throwError } from 'rxjs';
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
 
  
  submit(){
    this.service.printFormValues(this.form);
    return;
    this.service.contactInformationService.add(this.form.value).subscribe({
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
