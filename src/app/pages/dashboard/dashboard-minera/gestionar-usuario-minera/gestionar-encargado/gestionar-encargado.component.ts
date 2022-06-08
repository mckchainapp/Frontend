import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { GestionarUsuarioMineraService } from '../gestionar-usuario-minera.service';

@Component({
  selector: 'app-gestionar-encargado',
  templateUrl: './gestionar-encargado.component.html',
  styleUrls: []
})
export class GestionarEncargadoComponent implements OnInit {

  messageRequest: any;
  id: any;
  viewAlertFailed = false;
  viewAlertSuccess = false;

  constructor(private gestionarusuario: GestionarUsuarioMineraService,
              private fb: FormBuilder,
              private token: TokenStorageService) { }

  ngOnInit(): void {
  }
  

  public encargadoRequestForm = this.fb.group({
    emailUsuario: new FormControl('',Validators.compose([
      Validators.required,
      Validators.email
    ]))
  })

  Alert(){
    this.viewAlertFailed = false;
    this.viewAlertSuccess = false;
  }
  
  operarioRequest(): void {

    var email: any = {
      emailUsuario: this.encargadoRequestForm.controls['emailUsuario'].value,
    }

    var a = this.token.getUser();

    this.id = a.idUsuario;
    console.log(this.id, email);

    this.gestionarusuario.postEncargadoSolicitud(this.id, email).subscribe(
      data=>{
         this.messageRequest=data.message;
         this.viewAlertSuccess = true;
         this.viewAlertFailed = false;
         console.log(this.messageRequest);
       },
       err => {
         this.messageRequest = err.error.message;
         this.viewAlertSuccess = false;
         this.viewAlertFailed = true;
         console.log(err);
       }
     )

  }

}
