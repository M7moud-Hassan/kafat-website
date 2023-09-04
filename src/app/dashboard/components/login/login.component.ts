import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainDashoardService } from '../../services/main-dashoard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../kafaat/components/profile-layout/profile-layout.component.css','../../../kafaat/components/profile-account-information/profile-account-information.component.css','../../../kafaat/components/registeration/registeration.component.css','./login.component.css']
})
export class LoginComponent  implements OnInit {
  isPasswordVisible:boolean = false;
  form:FormGroup = new FormGroup({});
  constructor(private service:MainDashoardService) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  get email(){
    return this.form.controls['email'];
  }
  get password(){
    return this.form.controls['password'];
  }
  submit() {
    //  this.service.printFormValues(this.form);
    // if(this.form.valid){
    //   this.service.authService.login(this.form.value).subscribe({
    //     next:(response)=>{

    //     },
    //     error:(error)=>{

    //     }
    //   })
    // }
  }


}

