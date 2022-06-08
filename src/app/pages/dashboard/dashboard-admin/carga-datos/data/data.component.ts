import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { CargaDatosService } from '../carga-datos.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: []
})
export class DataComponent implements OnInit {

  p : number = 1 ;
  listadata: any;

  estado :any = [
    { 
      value : 'VIGENTE',
      name : 'VIGENTE',
    },
    { 
      value : 'SUSPENDIDO',
      name : 'SUSPENDIDO',
    },
  ]

  FilterPostCodigo = '';
  FilterPostRuc = '';
  FilterPostNombre = '';
  FilterPostEstado = '';

  constructor(private token : TokenStorageService,
              private cargadatosService : CargaDatosService) { }

  ngOnInit(): void {
  this.getData()
  }

  getData(){
    this.cargadatosService.getData().subscribe(
      data => { 
        this.listadata = data.sort((a:any,b:any) => a.nombreMinera.localeCompare(b.nombreMinera))
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }
  
}
