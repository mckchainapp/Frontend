import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {DashboardOperarioService} from '../dashboard-operario.service'

@Component({
  selector: 'app-profile-operario',
  templateUrl: './profile-operario.component.html',
  styleUrls: []
})
export class ProfileOperarioComponent implements OnInit {
  
  nombreUsuario: any;
  razonsocialMinera: any;
  telefonoUsuario: any;
  imagenUsuario: any;
  emailUsuario: any;

  auxfoto = new File([], '');

  constructor(private token:TokenStorageService,private dashboard:DashboardOperarioService) { }

  ngOnInit(): void {
    this.mostrarProfile()
  }

  mostrarProfile(){
    var a = this.token.getProfile()
    this.nombreUsuario = a.nombreUsuario + " " + a.apellidoUsuario
    this.razonsocialMinera = a.razonsocialMinera
    this.telefonoUsuario = a.telefonoUsuario
    this.imagenUsuario = a.imagenUsuario.urlImagen
    this.emailUsuario = a.emailUsuario
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

}
