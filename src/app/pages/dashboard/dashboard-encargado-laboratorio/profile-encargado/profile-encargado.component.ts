import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { DashboardEncargadoService } from '../dashboard-encargado.service';

@Component({
  selector: 'app-profile-encargado',
  templateUrl: './profile-encargado.component.html',
  styleUrls: []
})
export class ProfileEncargadoComponent implements OnInit {

  nombreUsuario: any;
  razonsocialMinera: any;
  telefonoUsuario: any;
  imagenUsuario: any;
  emailUsuario: any;
  auxfoto = new File([], '');

  constructor(private token:TokenStorageService,
              private dashservice: DashboardEncargadoService) { }

  ngOnInit(): void {
    this.mostrarProfile()
  }

  mostrarProfile(){
    var a = this.token.getProfile()
    console.log(a)
    this.nombreUsuario = a.nombreUsuario + " " + a.apellidoUsuario
    this.razonsocialMinera = a.razonsocialMinera
    this.telefonoUsuario = a.telefonoUsuario
    this.imagenUsuario = a.imagenUsuario.urlImagen
    this.emailUsuario = a.emailUsuario
  }

  // On file Select
  onChange(event:any) {
    this.auxfoto = event.target.files[0];
    console.log(this.auxfoto);

    var InfoMinera = this.token.getProfile()

    this.dashservice.UpdateFotoProfileD(InfoMinera.idUsuario, this.auxfoto).subscribe(
      data => {
        window.location.reload();
      }
    );
 }

}
