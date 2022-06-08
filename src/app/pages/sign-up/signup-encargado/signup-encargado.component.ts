import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../tools/custom-validator';
import { EncargadoSignup } from '../sign-up-interface';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-signup-encargado',
  templateUrl: './signup-encargado.component.html',
  styleUrls: []
})
export class SignupEncargadoComponent implements OnInit {

  message:any
  verificar = false;
  passwordTextType: any;
  token: any;
  classbg: any;

  constructor(private fb: FormBuilder,
              private signupService: SignUpService) { }

  ngOnInit(): void {
  }

  public encargadoSignupForm = this.fb.group({
    nombreUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    apellidoUsuario: new FormControl('', Validators.compose([
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

  SignupUsuarioEncargado() : void{

    //Local
    //this.token = location.href.slice(51); 
    //Dev
    this.token = location.href.slice(60); 

    var encargado: EncargadoSignup = {
      utilitytokenUsuario: this.token,
      nombreUsuario: this.encargadoSignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.encargadoSignupForm.controls['apellidoUsuario'].value,
      usernameUsuario: this.encargadoSignupForm.controls['usernameUsuario'].value,
      passwordUsuario : this.encargadoSignupForm.controls['passwordUsuario'].value
    }

    console.log(encargado)
    this.signupService.SignUpEncargado(encargado).subscribe(
      data => {
        this.verificar = true;
        this.classbg = "badge-success"
        this.message = data.message;
        setTimeout(() => {
          window.location.href = 'signin/encargado'
        }, 15000);
        //window.location.href= '/admin';
        console.log(data)
      },
      err => {
        this.message = err.error.message;
        this.classbg = "badge-danger"
        this.verificar = true;
        console.error(err)
      } 
    )
  }

  AlertDefault(){
    this.verificar = false;
  }

  redirect(){
    window.location.href="/signin/minera"
  }
}
