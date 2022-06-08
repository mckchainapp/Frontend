import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { DashboardOperarioService } from './dashboard-operario.service';

@Component({
  selector: 'app-dashboard-operario',
  templateUrl: './dashboard-operario.component.html',
  styleUrls: []
})
export class DashboardOperarioComponent implements OnInit {

  sidebar :any = [
    { 
      id : 0,
      title : 'Actualizar Estado - Productivo',
      icon : 'fa fa-address-card-o',
      subtitle : [
        {
          id: 0,
          name : 'Actualizar Estado - Productivo',
          link : '/operario/estado-productivo'
        }
      ]
    },
    { 
      id : 1,
      title : 'Actualizar Estado - Distribución',
      icon : 'fa fa-list',
      subtitle :[ 
        {
          id: 0,
          name : 'Actualizar Estado - Distribución',
          link : '/operario/estado-distribucion'
        }
      ]
    }
  ]

  title : any;
  nombres: any;
  imagen: any;
  messagecontra : any;
  verificar : boolean | undefined;

  constructor( private token : TokenStorageService,
               private service: DashboardOperarioService) { }

  ngOnInit(): void {
    this.getName()
    this.getProfile()
    this.getProfile2()
    }

  changeTitle(e:any){
    switch (e) {
      case 0:      
        this.title = 'Actualizar Estado - Productivo'
        this.token.saveTitle(this.title)
        break;

      case 1:
        this.title = 'Actualizar Estado - Distribución'
        this.token.saveTitle(this.title)
        break;

      case 2:
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
      this.title = "Actualizar Estado - Productivo"
    }
  }

  getProfile(){
    var a = this.token.getUser()
    this.nombres = a.nombreUsuario + " " + a.apellidoUsuario
    this.imagen = a.imagenUsuario.urlImagen
    console.log(a)
  }

  getProfile2(){

    var a = this.token.getUser();

    this.service.getProfileD(a.idUsuario).subscribe(
      data=>{
        this.token.saveProfile(data)  
        console.log(data);

      },
      err => {
        console.log(err);
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
        console.log(this.messagecontra)
      },

      err => {
        this.messagecontra = err.error.message;
        console.log(this.messagecontra)
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
