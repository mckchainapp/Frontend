import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { GestionarAnalisisLeyService } from './gestionar-analisis-ley.service';

@Component({
  selector: 'app-gestionar-analisis-ley',
  templateUrl: './gestionar-analisis-ley.component.html',
  styleUrls: []
})
export class GestionarAnalisisLeyComponent implements OnInit {

  analisise: any;
  analisisd: any;
  p = 1;
  q = 1;
  analisis:any
  message:any
  pedido: any;
  messageagregar: any;
  verficaragregar = false;
  alertagregar: any;
  editar: any;

constructor(private token : TokenStorageService,
            private service : GestionarAnalisisLeyService,
            private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getAnalisisE()
    this.getAnalisisD()
  }

  public actualizarAnalisisForm = this.fb.group({
    pesoAnalisisLey: new FormControl(''),
    distribuciongranulometricaAnalisisLey: new FormControl(''),
    humedadAnalisisLey: new FormControl(''),
    densidadpulpaAnalisisLey: new FormControl(''),
    caudalAnalisisLey: new FormControl('')
  });
  
  getAnalisisE(){

    this.service.getAnalisisEnable(this.token.getUser().idUsuario).subscribe(
      data => { 
        this.analisise = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  getAnalisisD(){
    this.service.getAnalisisDisable(this.token.getUser().idUsuario).subscribe(
      data => { 
        this.analisisd = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  selectAnalisis(est:any){
    this.analisis = est.idAnalisisLey;
    this.pedido = est.idpedidoAnalisisLey
    this.editar = est
    this.actualizarAnalisisForm.controls['pesoAnalisisLey'].setValue(this.editar.pesoAnalisisLey)
    this.actualizarAnalisisForm.controls['distribuciongranulometricaAnalisisLey'].setValue(this.editar.distribuciongranulometricaAnalisisLey)
    this.actualizarAnalisisForm.controls['humedadAnalisisLey'].setValue(this.editar.humedadAnalisisLey)
    this.actualizarAnalisisForm.controls['densidadpulpaAnalisisLey'].setValue(this.editar.densidadpulpaAnalisisLey)
    this.actualizarAnalisisForm.controls['caudalAnalisisLey'].setValue(this.editar.caudalAnalisisLey)
  }

  Inhabilitar(est:any){

    this.service.putAnalisisDisable(est.idAnalisisLey).subscribe(
      data => { 
        console.log(data)       
        this.message = data.message     
      },
      err => {
        this.message = err.error.message     

        console.error(err)           
    });
  }

  Habilitar(est:any){
    this.service.putAnalisisEnable(est.idAnalisisLey).subscribe(
      data => { 
        this.message = data.message     
        console.log(data)            
      },
      err => {
        this.message = err.error.message     
        console.error(err)           
    });
  }

  EditarAnalisis(){
    var updateinfo: any = {
      pedido: this.pedido,
      pesoAnalisisLey: this.actualizarAnalisisForm.controls['pesoAnalisisLey'].value,
      distribuciongranulometricaAnalisisLey: this.actualizarAnalisisForm.controls['distribuciongranulometricaAnalisisLey'].value,
      humedadAnalisisLey: this.actualizarAnalisisForm.controls['humedadAnalisisLey'].value,
      densidadpulpaAnalisisLey: this.actualizarAnalisisForm.controls['densidadpulpaAnalisisLey'].value,
      caudalAnalisisLey: this.actualizarAnalisisForm.controls['caudalAnalisisLey'].value
    }

    console.log(updateinfo)

    this.service.putAnalisis(this.analisis, updateinfo).subscribe(
      data => { 
        console.log(data) 
        this.messageagregar = data.message  
        this.verficaragregar = true
        this.alertagregar = 'alert-success'
        setTimeout(() => {
          this.verficaragregar = false
        }, 5000);
        
      },
      err => {
        console.error(err)   
        this.messageagregar = err.error.message;
        this.verficaragregar = true
        this.alertagregar = 'alert-danger'
        setTimeout(() => {
          this.verficaragregar = false
        }, 5000);    
    });
  }

}
