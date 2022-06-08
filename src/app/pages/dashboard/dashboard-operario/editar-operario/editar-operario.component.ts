import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {DashboardOperarioService} from '../dashboard-operario.service'
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-operario',
  templateUrl: './editar-operario.component.html',
  styleUrls: []
})
export class EditarOperarioComponent implements OnInit {

  public OperarioUpdateForm = this.fb.group({
  
    nombreUsuario: new FormControl(''),
    apellidoUsuario: new FormControl(''),
    telefonoUsuario: new FormControl('')
   
  });

  constructor(private fb: FormBuilder,private token : TokenStorageService,private dashservice:DashboardOperarioService) { }

  ngOnInit(): void {
  }

  UpdateOperario(){
    var InfoOperario = this.token.getProfile()

    var updateinfo: any = {
      nombreUsuario: this.OperarioUpdateForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.OperarioUpdateForm.controls['apellidoUsuario'].value,
      telefonoUsuario: this.OperarioUpdateForm.controls['telefonoUsuario'].value,
    }

    this.dashservice.UpdateProfileD(InfoOperario.idUsuario, updateinfo ).subscribe(
      data => {
        window.location.reload();
      },
    )
  }

}
