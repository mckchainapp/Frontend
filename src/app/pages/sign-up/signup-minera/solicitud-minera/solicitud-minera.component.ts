import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { SignUpService } from '../../sign-up.service';
import { EmpresaSolicitud } from '../../sign-up-interface';

@Component({
  selector: 'app-solicitud-minera',
  templateUrl: './solicitud-minera.component.html',
  styleUrls: []
})
export class SolicitudMineraComponent implements OnInit {

  message: any;
  verificar = false;
  verificar2 = false;
  verificar3 = true;

  constructor(private tokenstorageService : TokenStorageService,
              private signupMineraService : SignUpService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public mineraSolicitudForm = this.fb.group({    
    codigounicoMinera: new FormControl('', Validators.compose([
      Validators.required,
    ])), 
    rucMinera: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(10000000000)
    ])),
    emailMinera: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
  });

  SignupUsuarioMinera() : void{
    var minera: EmpresaSolicitud = {
      codigounicoMinera: this.mineraSolicitudForm.controls['codigounicoMinera'].value,
      rucMinera: this.mineraSolicitudForm.controls['rucMinera'].value,
      emailMinera : this.mineraSolicitudForm.controls['emailMinera'].value
    }

    this.signupMineraService.SolicitudMinera(minera).subscribe(
      data => {
        this.verificar = true;
        this.verificar2 = false;
        this.verificar3 = false;
        this.message = data.message;
        //window.location.href= '/admin';
        console.log(data)
      },
      err => {
        this.message = err.error.message;
        this.verificar = false;
        this.verificar2 = true;
        this.verificar3 = false;
        setTimeout(() => {
          this.verificar = false;
          this.verificar2 = false;
          this.verificar3 = true;
          this.mineraSolicitudForm.reset()
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
