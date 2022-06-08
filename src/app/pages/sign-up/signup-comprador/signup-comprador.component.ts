import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../tools/custom-validator';
import { CompradorSignup } from '../sign-up-interface';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-signup-comprador',
  templateUrl: './signup-comprador.component.html',
  styleUrls: []
})
export class SignupCompradorComponent implements OnInit {

  passwordTextType: any;
  verificar = false;
  message: any;
  classbg: any;

  constructor(private fb:FormBuilder,
              private signupService:SignUpService) { }

  ngOnInit(): void {
  }

  public compradorSignupForm = this.fb.group({
    nombreUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    apellidoUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    rucUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(10000000000),
      Validators.max(99999999999)
    ])),
    emailUsuario: new FormControl('', Validators.compose([
      Validators.email,
      Validators.required,
    ])),
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    passwordUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { passwordnumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {passworduppercase: true}),
      CustomValidators.patternValidator(/[a-z]/, {passwordsmallcase: true}),
      CustomValidators.patternValidator(/[@#$:\^%&]/, {passwordspecialcharacter: true})
    ])),
    
  });

  changepasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  AlertDefault(){
    this.verificar = false;
  }

  SignupUsuarioEncargado() : void{

    var comprador: any = {
      //utilitytokenUsuario: this.token,
      nombreUsuario: this.compradorSignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.compradorSignupForm.controls['apellidoUsuario'].value,
      rucUsuario: this.compradorSignupForm.controls['rucUsuario'].value,
      emailUsuario: this.compradorSignupForm.controls['emailUsuario'].value,
      usernameUsuario: this.compradorSignupForm.controls['usernameUsuario'].value,
      passwordUsuario : this.compradorSignupForm.controls['passwordUsuario'].value
    }

    console.log(comprador)
    this.signupService.SignUpComprador(comprador).subscribe(
      data => {
        this.classbg = "alert-success"
        this.message = data.message;
        this.verificar = true;
        //window.location.href= '/admin';
        console.log(data)
      },
      err => {
        this.message = err.error.message;
        this.classbg = "alert-danger"
        this.verificar = true;
        console.error(err)
      } 
    )
  }


}
