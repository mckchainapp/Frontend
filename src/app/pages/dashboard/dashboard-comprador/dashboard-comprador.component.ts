import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { DashboardCompradorService } from './dashboard-comprador.service';

@Component({
  selector: 'app-dashboard-comprador',
  templateUrl: './dashboard-comprador.component.html',
  styleUrls: []
})
export class DashboardCompradorComponent implements OnInit {

  sidebar :any = [
    { 
      id : 0,
      title : 'Ver datos de la minera',
      icon : 'fa fa-address-card-o',
      subtitle : [
        {
          id: 0,
          name : 'Ver datos de la minera',
          link : '/comprador/datos'
        }
      ]
    },
    
    { 
      id : 1,
      title : 'Ver estado del producto',
      icon : 'fa fa-list',
      subtitle :[ 
        {
          id: 0,
          name : 'Ver estado del producto',
          link : '/comprador/ver-estado'
        },
        {
          id: 1,
          name : 'Pedidos',
          link : '/comprador/pedidos'
        }
      ]
    }
  ]

  title : any;
  nombreUsuario: any;
  imagenUsuario:any
  messagecontra : any;

  constructor( private token : TokenStorageService,
               private service: DashboardCompradorService) { }

  ngOnInit(): void {
    this.getName()
    this.getProfile()
    this.getProfile2()
    }

  changeTitle(e:any){
    switch (e) {
      case 0:      
        this.title = 'Minera'
        this.token.saveTitle(this.title)
        break;

      case 1:
        this.title = 'Producto'
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
      this.title = "Ver datos de la minera"
    }
  }

  getProfile(){
    var a = this.token.getUser()
    this.nombreUsuario = a.nombreUsuario;
    this.imagenUsuario = a.imagenUsuario.urlImagen;
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
