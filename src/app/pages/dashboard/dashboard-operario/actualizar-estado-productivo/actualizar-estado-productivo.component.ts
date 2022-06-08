import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { ActualizarEstadoProductivoService } from './actualizar-estado-productivo.service';

@Component({
  selector: 'app-actualizar-estado-productivo',
  templateUrl: './actualizar-estado-productivo.component.html',
  styleUrls: []
})
export class ActualizarEstadoProductivoComponent implements OnInit {
  minerales: any;
  p = 1;

  constructor(private dashservice: ActualizarEstadoProductivoService,
              private token:TokenStorageService,
              private route:Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getMineralesEn()
  }

  getMineralesEn(){
    var InfoMinera = this.token.getUser()
    this.dashservice.getMineralen(InfoMinera.idMinera).subscribe(
      data => {
        this.minerales = data;
      }
    );
  }

  Seleccionar(event:any){
    console.log(event)
    this.token.saveEstadoProd(event)
    window.location.href = "operario/estado-productivo/editar"
  }

}
