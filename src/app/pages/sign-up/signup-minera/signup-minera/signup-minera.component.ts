import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/pages/tools/custom-validator';
import { EmpresaSignup } from '../../sign-up-interface';
import { SignUpService } from '../../sign-up.service';

@Component({
  selector: 'app-signup-minera',
  templateUrl: './signup-minera.component.html',
  styleUrls: []
})
export class SignupMineraComponent implements OnInit {

  message:any
  verificar:any
  verificar2:any
  passwordTextType: any;
  token: any;
  
  constructor(private fb: FormBuilder,
              private signupService: SignUpService) { }

  ngOnInit(): void {
  }

  public mineraSignupForm = this.fb.group({
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

  SignupUsuarioMinera() : void{

    //Local Dev
    //this.token = location.href.slice(36); 
    //QA
    this.token = location.href.slice(45); 

    var minera: EmpresaSignup = {
      utilitytokenUsuario: this.token,
      usernameUsuario: this.mineraSignupForm.controls['usernameUsuario'].value,
      passwordUsuario : this.mineraSignupForm.controls['passwordUsuario'].value
    }

    console.log(minera)
    this.signupService.SignUpMinera(minera).subscribe(
      data => {
        this.verificar = true;
        this.verificar2 = false;
        this.message = data.message;
        setTimeout(() => {
          window.location.href= 'signin/minera';
        }, 5000);
        
        console.log(data)
      },
      err => {
        this.message = err.error.message;
        this.verificar = false;
        this.verificar2 = true;
        setTimeout(() => {
          this.verificar = false;
          this.verificar2 = false;
        }, 15000);
        console.error(err)
      } 
    )
  }

  AlertDefault(){
    this.verificar = false;
    this.verificar2 = false;
  }

  redirect(){
    window.location.href="/signin/minera"
  }


}
