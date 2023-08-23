import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-profile-change-password',
  templateUrl: './profile-change-password.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','./profile-change-password.component.css'],
})
export class ProfileChangePasswordComponent  implements OnInit {
  form:FormGroup = new FormGroup({});
  
  
  constructor(private service:KafaatMainService){}

  ngOnInit(): void {
    this.createForm();
  }
  @Output() valueEmitted:EventEmitter<boolean>  = new EventEmitter<boolean>();
  changePage():void{
    this.valueEmitted.emit(false);
  }

  createForm(){
    this.form = this.service.formBuilder.group({
      userId:['123',[Validators.required]],
      currentPassword:['',[Validators.required]],
      newPassword:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    });
  }
  get isPasswordFieldsIdentical():boolean{
    return this.newPassword.value == this.confirmPassword.value;
  }
  submit() {
    this.service.printFormValues(this.form);
    if(this.form.valid || this.isPasswordFieldsIdentical){
      this.service.profileService.changePassword(this.form.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  
  get currentPassword(){
    return this.form.controls['currentPassword'];
  }
  get newPassword(){
    return this.form.controls['newPassword'];
  }
  get confirmPassword(){
    return this.form.controls['confirmPassword'];
  }
  back(){
    this.service.back;
  } 
}
