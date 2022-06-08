import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { VerDatosMineraService } from './ver-datos-minera.service';

@Component({
  selector: 'app-ver-datos-minera',
  templateUrl: './ver-datos-minera.component.html',
  styleUrls: []
})
export class VerDatosMineraComponent implements OnInit {

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
              private service : VerDatosMineraService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getData().subscribe(
      data => { 
        this.listadata = data.sort((a:any,b:any) => a.nombreMinera.localeCompare(b.nombreMinera))
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }


}
