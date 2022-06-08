import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { VerDatosMineraService } from '../ver-datos-minera/ver-datos-minera.service';
import { VerEstadoProductoService } from './ver-estado-producto.service';

@Component({
  selector: 'app-ver-estado-producto',
  templateUrl: './ver-estado-producto.component.html',
  styleUrls: []
})
export class VerEstadoProductoComponent implements OnInit {

  p = 1
  minerales:any;
  pedid: any;
  messagecontra: any;
  constructor(private token : TokenStorageService,
              private service : VerEstadoProductoService) { }

  ngOnInit(): void {
    this.getMinerales()
  }

  getMinerales(){
    this.service.getMineral().subscribe(
      data => { 
        this.minerales = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  hacerPedido(event:any){
    this.pedid = event
    console.log(this.pedid)
    
    const mineral : any = {
      mineral: this.pedid.idMineral
    }

    this.service.postPedido(this.token.getUser().idUsuario, mineral).subscribe(
      data => { 
        this.messagecontra = data.message
        console.log(data)            
      },
      err => {
        this.messagecontra = err.error.message;
        console.error(err)           
    });

  }

}
