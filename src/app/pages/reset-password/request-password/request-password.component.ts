import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: []
})
export class RequestPasswordComponent implements OnInit {

  alert: any;
  message : any;
  verificar = false;
  
  public passwordrequestForm = this.fb.group({
    emailUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ]))
  })

  constructor(private fb:FormBuilder, private passwordRequestService:ResetPasswordService) { }

  ngOnInit(): void {
  }

  PasswordResetRequest(): void{
    var passwordRequest: any = {
      emailUsuario: this.passwordrequestForm.controls['emailUsuario'].value
    }

    this.passwordRequestService.SendUrlPasswordReset(passwordRequest).subscribe(
      data => {
        this.message = data.message
        this.alert = 'alert-success'
        this.verificar = true;
      },

      err => {
        this.message = err.error.message;
        this.alert = 'alert-danger'
        this.verificar = true;
      }
    )
  }

  AlertDefault(){
    this.verificar = false
  }

}
