import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

import {DashboardCompradorService} from '../dashboard-comprador.service'

@Component({
  selector: 'app-perfil-comprador',
  templateUrl: './perfil-comprador.component.html',
  styleUrls: []
})
export class PerfilCompradorComponent implements OnInit {
  nombreUsuario: any;
  apellidoUsuario: any;
  rucUsuario: any;
  telefonoUsuario: any;
  imagenUsuario: any;
  auxfoto = new File([], '');

  constructor(private token:TokenStorageService,private dashboard:DashboardCompradorService) { }

  ngOnInit(): void {
    this.mostrarProfile()
  }

  // On file Select
  onChange(event:any) {
    this.auxfoto = event.target.files[0];
    var Infocomprador = this.token.getProfile()

    this.dashboard.UpdateFotoProfileD(Infocomprador.idUsuario, this.auxfoto).subscribe(
      data => {
        window.location.reload();
      }
    );
 }


  mostrarProfile(){
    var a = this.token.getProfile()
    this.nombreUsuario = a.nombreUsuario + " " + a.apellidoUsuario
    this.rucUsuario = a.rucUsuario
    this.telefonoUsuario = a.telefonoUsuario
    this.imagenUsuario = a.imagenUsuario.urlImagen
  }

}
