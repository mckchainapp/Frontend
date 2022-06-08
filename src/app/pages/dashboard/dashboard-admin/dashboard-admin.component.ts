import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: []
})
export class DashboardAdminComponent implements OnInit {

  sidebar :any = [
    { 
      id : 0,
      title : 'Solicitudes',
      icon : 'fa fa-address-card-o',
      subtitle : [
        {
          id: 0,
          name : 'Lista de Solicitudes',
          link : '/admin/solicitudes'
        }
      ]
    },
    { 
      id : 1,
      title : 'Datos',
      icon : 'fa fa-database',
      subtitle : [
        {
          id: 0,
          name : 'Carga de Datos',
          link : '/admin/cargardata'
        },
        {
          id: 1,
          name : 'Lista de Datos',
          link : '/admin/listadata'
        }
      ]
    }
  ]

  title : any;
  nombre: any;
  imagen: any;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {
    this.getName()
    this.getProfile()
  }

  changeTitle(e:any){
    switch (e) {
      case 0:      
        this.title = 'Solicitudes'
        this.token.saveTitle(this.title)
        break;

      case 1:
        this.title = 'Datos'
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
    var a = this.token.getUser()
    this.nombre = a.nombreUsuario
    this.imagen = a.imagenUsuario.urlImagen
  }

  closeSession(){
    this.token.signOut()
    window.location.href='index'
  }


}
