import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { UserSignin } from '../sign-in-interface';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-signin-encargado',
  templateUrl: './signin-encargado.component.html',
  styleUrls: []
})
export class SigninEncargadoComponent implements OnInit {

  passwordTextType: any;
  message: any;
  verificar = false;

  constructor(private tokenstorageService : TokenStorageService,
              private signinUserService : SignInService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public adminSigninForm = this.fb.group({    
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])), 
    passwordUsuario: new FormControl('', 
    Validators.required)
  });

  changepasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  SigninUsuario() : void{
    var usuario: UserSignin = {
      usernameUsuario: this.adminSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.adminSigninForm.controls['passwordUsuario'].value
    }

    this.signinUserService.SignInUserEncargado(usuario).subscribe(
      data => {
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);
        window.location.href= '/encargado';

      },

      err => {
        this.message = err.error.message;
        this.verificar = true;
        console.log(err)
      }
    )
  }

  AlertDefault(){
    this.verificar = false;
  }

}
