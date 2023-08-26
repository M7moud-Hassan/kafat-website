import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-code-auth',
  templateUrl: './code-auth.component.html',
  styleUrls: ['../profile-layout/profile-layout.component.css','../profile-account-information/profile-account-information.component.css','../registeration/registeration.component.css','../login/login.component.css','./code-auth.component.css']
})
export class CodeAuthComponent  implements OnInit {
  form:FormGroup = new FormGroup({});
  verificationCode:any={n1:'',n2:'',n3:'',n4:''};
  errorCode:boolean=false;
  isIn60SecondDularion:boolean=false;
  constructor(private service:KafaatMainService) {
    this.verificationCode={n1:'',n2:'',n3:'',n4:''};
  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = this.service.formBuilder.group({
      code:['',[Validators.required]],
    });
  }
  get code(){
    return this.form.controls['code'];
  }
  submit() {
    this.form.controls['code'].setValue(`${this.verificationCode.n1}${this.verificationCode.n2}${this.verificationCode.n3}${this.verificationCode.n4}`);
     this.service.printFormValues(this.form);
    if(this.form.valid){
      this.service.authService.validateSentCode(this.form.value).subscribe({
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
