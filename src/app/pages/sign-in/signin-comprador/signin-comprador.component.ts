import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { UserSignin } from '../sign-in-interface';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-signin-comprador',
  templateUrl: './signin-comprador.component.html',
  styleUrls: []
})
export class SigninCompradorComponent implements OnInit {

  passwordTextType: any;
  message: any;
  verificar = false;

  constructor(private tokenstorageService : TokenStorageService,
              private signinUserService : SignInService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public compradorSigninForm = this.fb.group({    
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
      usernameUsuario: this.compradorSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.compradorSigninForm.controls['passwordUsuario'].value
    }
    console.log(usuario)
    this.signinUserService.SignInUserComprador(usuario).subscribe(
      data => {
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);
        console.log(data)
        window.location.href= '/comprador';
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
