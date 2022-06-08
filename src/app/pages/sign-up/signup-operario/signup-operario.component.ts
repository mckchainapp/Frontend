import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../tools/custom-validator';
import { OperarioSignup } from '../sign-up-interface';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-signup-operario',
  templateUrl: './signup-operario.component.html',
  styleUrls: []
})
export class SignupOperarioComponent implements OnInit {

  message:any
  verificar = false;
  passwordTextType: any;
  token: any;
  classbg: any;
  
  constructor(private fb: FormBuilder,
              private signupService: SignUpService) { }

  ngOnInit(): void {
  }

  public operarioSignupForm = this.fb.group({
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

  SignupUsuarioOperario() : void{

    //Local
    //this.token = location.href.slice(38); 
    //Dev
    this.token = location.href.slice(47); 

    var operario: OperarioSignup = {
      utilitytokenUsuario: this.token,
      nombreUsuario: this.operarioSignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.operarioSignupForm.controls['apellidoUsuario'].value,
      usernameUsuario: this.operarioSignupForm.controls['usernameUsuario'].value,
      passwordUsuario : this.operarioSignupForm.controls['passwordUsuario'].value
    }

    console.log(operario)
    this.signupService.SignUpOperario(operario).subscribe(
      data => {
        this.message = data.message;
        this.verificar = true;
        this.classbg = "badge-success"
        setTimeout(() => {
          window.location.href = 'signin/operario'
        }, 15000);
        //window.location.href= '/admin';
        console.log(data)
      },
      err => {
        this.verificar = true;
        this.message = err.error.message;
        this.classbg = "badge-danger"
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
