import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {DashboardCompradorService} from '../dashboard-comprador.service'

@Component({
  selector: 'app-editar-comprador',
  templateUrl: './editar-comprador.component.html',
  styleUrls: []
})
export class EditarCompradorComponent implements OnInit {

  public CompradorUpdateForm = this.fb.group({
  
    nombreUsuario: new FormControl(''),
    apellidoUsuario: new FormControl(''),
    telefonoUsuario: new FormControl(''),
    webUsuario: new FormControl(''),
   
  });

  constructor(private fb: FormBuilder,private token : TokenStorageService,private dashservice:DashboardCompradorService) { }

  ngOnInit(): void {
  }

  UpdateComprador(){
    var InfoMinera = this.token.getProfile()

    var updateinfo: any = {
      nombreUsuario: this.CompradorUpdateForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.CompradorUpdateForm.controls['apellidoUsuario'].value,
      telefonoUsuario: this.CompradorUpdateForm.controls['telefonoUsuario'].value,
      webUsuario: this.CompradorUpdateForm.controls['webUsuario'].value,
    }

    this.dashservice.UpdateProfileD(InfoMinera.idUsuario, updateinfo ).subscribe(
      data => {
        window.location.reload();
      },
    )
  }

}
