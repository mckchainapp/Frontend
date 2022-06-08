import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { VerEstadoProductoService } from '../ver-estado-producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: []
})
export class PedidosComponent implements OnInit {

  p = 1
  q = 1
  r = 1
  pedidost:any;
  pedidospr:any;
  pedidosp:any;
  messagecontra:any;
  detalle:any
  detalle2:any
  copia:any
  messagecopia:any;
  viewAlertSuccess = 0;

  @ViewChild("myModalInfo", {static: false}) myModalInfo: TemplateRef<any> | undefined
  @ViewChild("myModalInfo2", {static: false}) myModalInfo2: TemplateRef<any> | undefined

  constructor(private token : TokenStorageService,
              private service : VerEstadoProductoService,
              private fb : FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.mostrarPedidoT()
    this.mostrarPedidoPr()
    this.mostrarPedidoP()

  }

  public detalleForm = this.fb.group({
  
    caudalAnalisisLey: new FormControl({value: '', disabled: true}),
    densidadpulpaAnalisisLey: new FormControl({value: '', disabled: true},),
    distribuciongranulometricaAnalisisLey: new FormControl({value: '', disabled: true},),
    humedadAnalisisLey: new FormControl({value: '', disabled: true},),
    mineralAnalisisLey: new FormControl({value: '', disabled: true},),
    nombreEncargadoLaboratorio: new FormControl({value: '', disabled: true},),
    nombreMinera: new FormControl({value: '', disabled: true},),
    pesoAnalisisLey: new FormControl({value: '', disabled: true},),
    rucMinera: new FormControl({value: '', disabled: true},),
   
  });

  public smartForm = this.fb.group({
    tramaAnalisisLeySmartContract: new FormControl({value: '', disabled: true}),
  })


  mostrarPedidoT(){
    this.service.getPedidot(this.token.getUser().idUsuario).subscribe(
      data => { 
        this.pedidost = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  mostrarPedidoPr(){
    this.service.getPedidopr(this.token.getUser().idUsuario).subscribe(
      data => { 
        this.pedidospr = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  mostrarPedidoP(){
    this.service.getPedidop(this.token.getUser().idUsuario).subscribe(
      data => { 
        this.pedidosp = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  solEstudio(event:any){
    var a = event.idPedido

    this.service.solicitarEstudio(a).subscribe(
      data => { 
        this.messagecontra = data.message
        this.mostrarPedidoP()
        this.mostrarPedidoPr()
        console.log(data)            
      },
      err => {
        this.messagecontra = err.error.message;
        console.error(err)           
    });
  }

  verDetalle(event:any){
    this.detalle = event
    console.log(this.detalle)
    this.service.getDetalle(this.detalle.idAnalisisLey).subscribe(
      data => { 
        console.log(data)  
        this.detalleForm.controls['nombreMinera'].setValue(data.nombreMinera) 
        this.detalleForm.controls['rucMinera'].setValue(data.rucMinera) 
        this.detalleForm.controls['nombreEncargadoLaboratorio'].setValue(data.nombreEncargadoLaboratorio)   

        this.detalleForm.controls['mineralAnalisisLey'].setValue(data.mineralAnalisisLey)   
        this.detalleForm.controls['caudalAnalisisLey'].setValue(data.caudalAnalisisLey)   
        this.detalleForm.controls['densidadpulpaAnalisisLey'].setValue(data.densidadpulpaAnalisisLey)   
        this.detalleForm.controls['distribuciongranulometricaAnalisisLey'].setValue(data.distribuciongranulometricaAnalisisLey)   
        this.detalleForm.controls['humedadAnalisisLey'].setValue(data.humedadAnalisisLey)               
        this.detalleForm.controls['pesoAnalisisLey'].setValue(data.pesoAnalisisLey)   

        this.modalService.open(this.myModalInfo , {size: 'lg'});
      },
      err => {
        console.error(err)           
      }
    );
  }

  mostrarSmart(event:any){
    this.detalle2 = event
    this.service.getSmart(this.detalle2.idAnalisisLey).subscribe(
      data => { 
        this.smartForm.controls['tramaAnalisisLeySmartContract'].setValue(data.tramaAnalisisLeySmartContract) 
        console.log(data)            
        this.modalService.open(this.myModalInfo2 , {size: 'lg'});
      },
      err => {
        console.error(err)           
    });
  }

  copiarSmart(){
    if(this.copia !== "" && this.copia !== null && this.copia !== undefined){
      this.messagecopia = "Texto copiado"
      this.viewAlertSuccess = 1
      setTimeout(() => {
        this.viewAlertSuccess = 0
      }, 5000);
    }else{
      this.copia = "";
      this.messagecopia = "No se pudo copiar el texto"
      this.viewAlertSuccess = 2
      setTimeout(() => {
        this.viewAlertSuccess = 0
      }, 5000);
    }
  }


}
