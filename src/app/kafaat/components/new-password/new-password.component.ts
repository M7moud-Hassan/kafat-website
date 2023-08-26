import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','../profile-account-information/profile-account-information.component.css','../registeration/registeration.component.css','../login/login.component.css','./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  isPasswordVisible:boolean = false;
  isPasswordVisible2:boolean = false;
  form:FormGroup = new FormGroup({});
  constructor(private service:KafaatMainService) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      password:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirmPassword:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    });
  }
  get password(){
    return this.form.controls['password'];
  }
  get confirmPassword(){
    return this.form.controls['confirmPassword'];
  }
  get isPasswordFieldsIdentical():boolean{
    return this.password.value == this.confirmPassword.value;
  }
  submit() {
    //  this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.authService.changePassword(this.form.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
    }
  }
  back(){
    this.service.back;
  }

}
