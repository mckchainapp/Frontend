import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { DashboardMineraService } from '../../../dashboard-minera/dashboard-minera.service';
import { DashboardEncargadoService } from '../../dashboard-encargado.service';

@Component({
  selector: 'app-editar-encargado',
  templateUrl: './editar-encargado.component.html',
  styleUrls: []
})
export class EditarEncargadoComponent implements OnInit {

  public MineraUpdateForm = this.fb.group({
  
    nombreUsuario: new FormControl(''),
    apellidoUsuario: new FormControl(''),
    telefonoUsuario: new FormControl(''),
   
  });

  constructor(private fb: FormBuilder,private token : TokenStorageService,private dashservice:DashboardEncargadoService) { }

  ngOnInit(): void {

  }

  UpdateOperario(){
    var InfoOperario = this.token.getProfile()

    var updateinfo: any = {
      nombreUsuario: this.MineraUpdateForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.MineraUpdateForm.controls['apellidoUsuario'].value,
      telefonoUsuario: this.MineraUpdateForm.controls['telefonoUsuario'].value,
    }

    this.dashservice.UpdateProfileD(InfoOperario.idUsuario, updateinfo ).subscribe(
      data => {
        window.location.reload();
      },
    )
  }

}
