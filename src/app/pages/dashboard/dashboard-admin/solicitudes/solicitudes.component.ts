import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { SolicitudesService } from './solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: []
})
export class SolicitudesComponent implements OnInit {

  p : number = 1 ;
  q : number = 1 ;
  solicitudes: any;
  solicitudesaprov: any;
  ListSolAp: any;
  idSol: any;
  FilterPostPendiente = '';
  FilterPostAprobada = '';
  

  constructor(private solicitudService : SolicitudesService,
              private token : TokenStorageService) { }

  ngOnInit(): void {
    this.getSolicitud()
    this.getSolicitudAprov()
  }

  getSolicitud() : void{

    this.solicitudService.getSolicitudes().subscribe(
      data => {
        this.solicitudes = data;
        //this.message = data.message;
        //window.location.href= '/admin';
        console.log(data)
      },
      err => {
        //this.message = err.error.message;
        console.error(err)
      } 
    )
  }

  getSolicitudAprov() : void{
    
    this.solicitudService.getSolicitudesAprov().subscribe(
      data => {
        this.solicitudesaprov = data;
        //this.message = data.message;
        //window.location.href= '/admin';
        console.log(data)
      },
      err => {
        //this.message = err.error.message;
        console.error(err)
      } 
    )
  }

  Seleccionarsol(sol:any){
    this.idSol = sol.idMinera
  }

  AprobarSolicitud(sol:any){
    this.solicitudService.aprobarSolicitudes(sol.idMinera).subscribe(
      data => {
        this.getSolicitud()
        this.getSolicitudAprov()
        console.log(data)
      },
      err => {
        //this.message = err.error.message;
        console.error(err)
      } 
    )
  }

  RechazarSolicitud(){
    console.log(this.idSol)
    this.solicitudService.rechazarSolicitudes(this.idSol).subscribe(
      data => {
        this.getSolicitud()
        this.getSolicitudAprov()
        console.log(data)
      },
      err => {
        //this.message = err.error.message;
        console.error(err)
      } 
    )
  }

}
