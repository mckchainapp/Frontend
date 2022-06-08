import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { DashboardMineraService } from './dashboard-minera.service';

@Component({
  selector: 'app-dashboard-minera',
  templateUrl: './dashboard-minera.component.html',
  styleUrls: []
})
export class DashboardMineraComponent implements OnInit {

  sidebar :any = [
    { 
      id : 0,
      title : 'Gestionar Mineral',
      icon : 'fa fa-address-card-o',
      subtitle : [
        {
          id: 0,
          name : 'Gestionar Mineral',
          link : '/minera/gestionar'
        }
      ]
    },
    { 
      id : 1,
      title : 'Gestionar Usuarios',
      icon : 'fa fa-file-text',
      subtitle :[ 
        {
          id: 0,
          name : 'Gestionar Operario',
          link : '/minera/gestionar/operario'
        },
        {
          id: 1,
          name : 'Gestionar Encargado',
          link : '/minera/gestionar/encargado'
        }
      ]
    },
    { 
      id : 2,
      title : 'Zona de Exploración',
      icon : 'fa fa-map',
      subtitle : [
        {
          id: 0,
          name : 'Zona de Exploración',
          link : '/minera/zonas-exploracion'
        }
      ]
    },
  ]

  title : any;
  nombreUsuario : any;
  imagenUsuario : any;
  messagecontra : any;
  verificar : boolean | undefined;

  constructor( private token : TokenStorageService,
               private service : DashboardMineraService,
               private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getName()
    this.getProfile()
  }

  changeTitle(e:any){
    switch (e) {
      case 0:      
        this.title = 'Minerales'
        this.token.saveTitle(this.title)
        break;

      case 1:
        this.title = 'Usuarios'
        this.token.saveTitle(this.title)
        break;
      
      case 2:
        this.title = 'Zona de Exploración'
        this.token.saveTitle(this.title)
        break;

      case 3:
        this.title = 'Perfil'
        this.token.saveTitle(this.title)
        break;

      default:
        break;
    }
  }

  getName(){
    if(this.token.getTitle()){
      this.title = this.token.getTitle()
    }else{
      this.title = "Solicitudes"
    }
  }

  getProfile(){
    var a = this.token.getUser();
    this.service.getProfileD(a.idUsuario).subscribe(
      data=>{

        this.token.saveProfile(data)  
        this.nombreUsuario = data.nombreUsuario
        this.imagenUsuario = data.imagenUsuario.urlImagen
      },
      err => {
      }
     )
  }

  PasswordResetRequest(): void{
    var a = this.token.getProfile()
    var passwordRequest: any = {
      emailUsuario: a.emailUsuario
    }

    this.service.SendUrlPasswordReset(passwordRequest).subscribe(
      data => {
        this.messagecontra = data.message
        this.verificar = true;
      },

      err => {
        this.messagecontra = err.error.message;
        this.verificar = true;
      }
    )
  }

  mensaje(){
    this.messagecontra = '¿Seguro que desa cambiar de contraseña?'
  }

  closeSession(){
    this.token.signOut()
    window.location.href='index'
  }

}
