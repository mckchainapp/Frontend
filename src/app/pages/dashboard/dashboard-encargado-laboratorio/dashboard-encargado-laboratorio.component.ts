import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { DashboardEncargadoService } from './dashboard-encargado.service';

@Component({
  selector: 'app-dashboard-encargado-laboratorio',
  templateUrl: './dashboard-encargado-laboratorio.component.html',
  styleUrls: []
})
export class DashboardEncargadoLaboratorioComponent implements OnInit {

  nombres : any;
  title : any;

  sidebar :any = [
    { 
      id : 0,
      title : 'Gestionar Pedido de Estudio',
      icon : 'fa fa-address-card-o',
      subtitle : [
        {
          id: 0,
          name : 'Pedido de Estudio',
          link : '/encargado/gestionar/pedido'
        }
      ]
    },
    { 
      id : 1,
      title : 'Gestionar Análisis de Ley',
      icon : 'fa fa-list',
      subtitle :[ 
        {
          id: 0,
          name : 'Análisis de Ley',
          link : '/encargado/gestionar/analisis'
        }
      ]
    }
  ]
  
  imagen: any;
  messagecontra : any;


  constructor( private token : TokenStorageService,
               private service: DashboardEncargadoService) { }

  ngOnInit(): void {
    this.getName()
    this.getProfile()
    this.getProfile2()
    }

  changeTitle(e:any){
    switch (e) {
      case 0:      
        this.title = 'Gestionar Pedido de Estudio'
        this.token.saveTitle(this.title)
        break;

      case 1:
        this.title = 'Gestionar Análisis de Ley'
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
      this.title = "Gestionar Pedido de Estudio"
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
