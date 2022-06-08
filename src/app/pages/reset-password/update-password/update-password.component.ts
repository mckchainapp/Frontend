import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { CustomValidators } from '../../tools/custom-validator';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: []
})
export class UpdatePasswordComponent implements OnInit {

  public passwordupdateForm = this.fb.group({
    contrasenia: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { passwordnumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {passworduppercase: true}),
      CustomValidators.patternValidator(/[a-z]/, {passwordsmallcase: true}),
      CustomValidators.patternValidator(/[@#$:\^%&]/, {passwordspecialcharacter: true})
    ])),
    confirmcontrasenia: new FormControl('', Validators.compose([
      Validators.required]))

  }, { validator: CustomValidators.passwordMatchValidator("contrasenia", "confirmcontrasenia") })

  Message: any;
  verificar1 = false;
  verificar2 = false;
  token : any;
  contra2: any;
  contra: any;
  passwordTextType: any;
  passwordTextType2: any;
  colorCheck : any;
  cambiarc = false;
  cambiarc2 = false;
  colorCheck2 : any;
  viewContra = false;
  viewContra2 = false;
  messageContra :any;

  constructor(private passwordupdateService: ResetPasswordService,
              private fb: FormBuilder,
              private router: Router,
              private tokenstorage:TokenStorageService) { }

  ngOnInit(): void {}

  //link   (29)    
  //local
  //this.token = location.href.slice(39); 
  //producción     
  // location.href.slice(46); 

  AlertDefault() {
    this.verificar1 = false;
    this.verificar2 = false;
  }

  PasswordUpdate(): any {
    //Dev
    //this.token = location.href.slice(39)
    //Prod
    this.token = location.href.slice(48); 

    var passwordUpdate: any = {
      passwordUsuario: this.passwordupdateForm.controls['contrasenia'].value,
      utilitytokenUsuario: this.token || ""
    }
    
    this.passwordupdateService.PasswordUpdate(passwordUpdate).subscribe(
      data => {
        this.verificar1 = true;
        this.verificar2 = false;
        this.Message = data.message;
        //setTimeout(redirect,3000);
      },

      err => {
        this.verificar1 = false;
        this.verificar2 = true;
        this.Message = err.error.message;
        //setTimeout(redirect,3000);
      }
    )
  }

  verificarContra(){
    this.changeColor();
    this.changeColor2();
    this.confirmarContra();
  }

  confirmarContra(){
    this.contra = this.passwordupdateForm.controls['contrasenia'].value
    this.contra2 = this.passwordupdateForm.controls['confirmcontrasenia'].value


    if(this.contra == this.contra2){
      this.viewContra = true;
      this.viewContra2 = false;
      this.messageContra = "Las contraseñas coinciden"

    }else{
      this.viewContra = false;
      this.viewContra2 = true;
      this.messageContra = "Las contraseñas no coinciden"
    }
  }

  changepasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  changepasswordTextType2() {
    this.passwordTextType2 = !this.passwordTextType2;
  }
  
  changeColor(){

    var a = this.passwordupdateForm.get('contrasenia')?.errors;
    
    switch (a) {
      case null:  
        if(this.cambiarc == true){
          this.colorCheck = !this.colorCheck;
          this.cambiarc = false
        }
        break;

      default:
        if(this.cambiarc == false){
          this.colorCheck = !this.colorCheck;
          this.cambiarc = true
        }
        break;
    }
  }

  changeColor2(){

    var a = this.passwordupdateForm.get('confirmcontrasenia')?.errors;

    this.contra = this.passwordupdateForm.controls['contrasenia'].value
    this.contra = this.passwordupdateForm.controls['confirmcontrasenia'].value

    switch (a) {
      case null:  
        if(this.cambiarc2 == true){
          this.colorCheck2 = !this.colorCheck2;
          this.cambiarc2 = false
        }
        break;

      default:
        if(this.cambiarc2 == false){
          this.colorCheck2 = !this.colorCheck2;
          this.cambiarc2 = true
        }
        break;
    }
    
  }

}
