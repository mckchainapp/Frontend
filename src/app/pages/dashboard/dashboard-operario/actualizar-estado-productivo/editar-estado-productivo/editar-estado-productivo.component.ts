import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { ActualizarEstadoProductivoService } from '../actualizar-estado-productivo.service';

@Component({
  selector: 'app-editar-estado-productivo',
  templateUrl: './editar-estado-productivo.component.html',
  styleUrls: []
})
export class EditarEstadoProductivoComponent implements OnInit {

  fase: any;
  bg : any;

  EXPLORACION: any
  MINADO : any
  PROCESODELIXIVIACION : any 
  MAQUINACHANCADORA : any    
  CHANCADOYAPILAMIENTO : any    
  LIXIVIACIONENPILAS : any 
  FUNDICION : any
  TRANSPORTE : any 
  PROCESOMETALURGICO : any 
  PARAESTUDIO : any 
  nivelfase: any;
  nfase: any;
  message:any
  constructor(private token:TokenStorageService,
              private dashservice : ActualizarEstadoProductivoService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.fase = this.token.getEstadoProd().faseMineral 
    console.log(this.fase)

    switch (this.fase) {
      case "EXPLORACIÓN":    
        this.EXPLORACION = !this.EXPLORACION;
        break;
      case 'MINADO':   
        this.MINADO = !this.MINADO           
        break;
      case 'PROCESO DE LIXIVIACION':   
        this.PROCESODELIXIVIACION = !this.PROCESODELIXIVIACION           
        break;
      case 'MAQUINA CHANCADORA':   
        this.MAQUINACHANCADORA = !this.MAQUINACHANCADORA 
        break;
      case 'CHANCADO Y APILAMIENTO':      
        this.CHANCADOYAPILAMIENTO = !this.CHANCADOYAPILAMIENTO 
        break
      case 'LIXIVIACION EN PILAS':   
        this.LIXIVIACIONENPILAS = !this.LIXIVIACIONENPILAS        
        break;
      case 'FUNDICION':   
        this.FUNDICION = !this.FUNDICION        
        break;
      case 'TRANSPORTE':      
        this.TRANSPORTE = !this.TRANSPORTE          
        break;
      case 'PROCESO METALURGICO':
        this.PROCESOMETALURGICO = !this.PROCESOMETALURGICO          
        break;
      case 'PARA ESTUDIO':  
        this.PARAESTUDIO = !this.PARAESTUDIO           
        break
      default:
        this.EXPLORACION = this.EXPLORACION;
        this.MINADO = this.MINADO
        this.PROCESODELIXIVIACION = this.PROCESODELIXIVIACION 
        this.MAQUINACHANCADORA = this.MAQUINACHANCADORA 
        this.CHANCADOYAPILAMIENTO = this.CHANCADOYAPILAMIENTO 
        this.FUNDICION = this.FUNDICION   
        this.TRANSPORTE = this.TRANSPORTE 
        this.PROCESOMETALURGICO = this.PROCESOMETALURGICO   
        this.PARAESTUDIO = this.PARAESTUDIO
        break;
    }

  }

  updateData(event:any){
    this.message = '¿Seguro que desea cambiar la fase del mineral?'
    this.nivelfase = event
    this.nfase = this.token.getEstadoProd().idMineral 

    switch (this.nivelfase) {
      case 1:    
        this.bg = "EXPLORACIÓN";
        break;
      case 2:   
        this.bg = 'MINADO'           
        break;
      case 3:   
        this.bg = 'PROCESO DE LIXIVIACION'           
        break;
      case 4:   
        this.bg = 'MAQUINA CHANCADORA' 
        break;
      case 5:      
        this.bg = 'CHANCADO Y APILAMIENTO'
        break
      case 6:   
        this.bg = 'LIXIVIACION EN PILAS'      
        break;
      case 7:   
        this.bg = 'FUNDICION'        
        break;
      case 8:      
        this.bg = 'TRANSPORTE'         
        break;
      case 9:
        this.bg = 'PROCESO METALURGICO'          
        break;
      case 10:  
        this.bg = 'PARA ESTUDIO'           
        break
      default:
        this.bg = ''
        break;
    }
  }

  enviarMineral(){

    var updateinfo: any = {
      faseMineral: this.bg
    }
    
    this.dashservice.updateMineral(this.token.getEstadoProd().idMineral, updateinfo).subscribe(
      data => {
        this.message = data.message
        setTimeout(() => {
          window.location.href ="operario/estado-productivo"
        }, 3000);
        console.log(data)
      }
    );

    console.log(this.token.getEstadoProd().idMineral)
  }


}
