import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { UserSignin } from '../sign-in-interface';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-signin-minera',
  templateUrl: './signin-minera.component.html',
  styleUrls: []
})
export class SigninMineraComponent implements OnInit {

  passwordTextType: any;
  message: any;
  verificar = false;

  constructor(private tokenstorageService : TokenStorageService,
              private signinUserService : SignInService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public mineraSigninForm = this.fb.group({    
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
      usernameUsuario: this.mineraSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.mineraSigninForm.controls['passwordUsuario'].value
    }
    console.log(usuario)
    this.signinUserService.SignInUserMinera(usuario).subscribe(
      data => {
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);
        window.location.href= '/minera/gestionar';
      },
      err => {
        this.message = err.error.message;
        this.verificar = true;
        console.error(err)
      }
    )
  }

  AlertDefault(){
    this.verificar = false;
  }

}
