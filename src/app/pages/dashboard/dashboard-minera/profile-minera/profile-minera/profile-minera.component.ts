import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {DashboardMineraService} from '../../dashboard-minera.service'

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-profile-minera',
  templateUrl: './profile-minera.component.html',
  styleUrls: []
})
export class ProfileMineraComponent implements OnInit {

  imagenUser: any;
  nombreUser: any
  codigoUnico: any;
  ubicacionUser: any;
  telefonoUser: any;
  auxfoto = new File([], '');
  emailUser: any;
  webUser: any;
  rucUser: any;
  title: any;

  constructor(private token : TokenStorageService,private dashservice:DashboardMineraService) { }

  ngOnInit(): void {
    this.getPerfil()
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


  getPerfil(){
    var a = this.token.getProfile()
    console.log(a)
    this.imagenUser = a.imagenUsuario.urlImagen
    this.nombreUser = a.nombreUsuario
    this.codigoUnico = a.codigounicoMinera
    this.ubicacionUser = a.ubicacionMinera
    this.emailUser = a.emailUsuario
    this.webUser = a.webUsuario
    this.rucUser = a.rucUsuario
    if(a.telefonoUsuario !== null && a.telefonoUsuario !== undefined){
      this.telefonoUser = a.telefonoUsuario
    }else{
      this.telefonoUser = ''
    }
  }

}