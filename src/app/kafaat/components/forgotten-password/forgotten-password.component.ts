import { Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','../profile-account-information/profile-account-information.component.css','../registeration/registeration.component.css','../login/login.component.css','./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  constructor(private service:KafaatMainService) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      email:['',[Validators.required]],
    });
  }
  get email(){
    return this.form.controls['email'];
  }
  submit() {
    //  this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.authService.forgetPassword(this.form.value).subscribe({
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
