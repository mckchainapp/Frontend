import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { GestionarPedidoEstudioService } from './gestionar-pedido-estudio.service';

@Component({
  selector: 'app-gestionar-pedido-estudio',
  templateUrl: './gestionar-pedido-estudio.component.html',
  styleUrls: []
})
export class GestionarPedidoEstudioComponent implements OnInit {

  p : number = 1 ;

  estudioP: any;
  messageagregar: any;
  verficaragregar = false;
  alertagregar: any;
  idpedido: any;

  constructor(private token : TokenStorageService,
              private service : GestionarPedidoEstudioService,
              private fb : FormBuilder,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getEstudioP()
  }

  ngAfterContentChecked(){
    this.cd.detectChanges();
  }

  public analisisLeyForm = this.fb.group({
    pesoAnalisisLey: new FormControl(''),
    distribuciongranulometricaAnalisisLey: new FormControl(''),
    humedadAnalisisLey: new FormControl(''),
    densidadpulpaAnalisisLey: new FormControl(''),
    caudalAnalisisLey: new FormControl('')
  });
  
  getEstudioP(){

    this.service.getEstudioPendiente(this.token.getUser().idUsuario).subscribe(
      data => { 
        this.estudioP = data
        console.log(data)            
      },
      err => {
        console.error(err)           
    });
  }

  pedirAnalisis(event:any){
    this.idpedido = event.idPedido
    console.log(this.idpedido)
  }

  registrarAnalisisLey(){

    var updateinfo: any = {
      pedido: this.idpedido,
      pesoAnalisisLey: this.analisisLeyForm.controls['pesoAnalisisLey'].value,
      distribuciongranulometricaAnalisisLey: this.analisisLeyForm.controls['distribuciongranulometricaAnalisisLey'].value,
      humedadAnalisisLey: this.analisisLeyForm.controls['humedadAnalisisLey'].value,
      densidadpulpaAnalisisLey: this.analisisLeyForm.controls['densidadpulpaAnalisisLey'].value,
      caudalAnalisisLey: this.analisisLeyForm.controls['caudalAnalisisLey'].value
    }

    console.log(updateinfo)

    this.service.postAnalisis(this.token.getUser().idUsuario, updateinfo).subscribe(
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
