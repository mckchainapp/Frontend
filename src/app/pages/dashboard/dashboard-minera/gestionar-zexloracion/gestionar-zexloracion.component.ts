import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {DashboardMineraService} from '../dashboard-minera.service'
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {Router} from '@angular/router'
import { GestionarZexloracionService } from './gestionar-zexloracion.service';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-gestionar-zexloracion',
  templateUrl: './gestionar-zexloracion.component.html',
  styleUrls: []
})
export class GestionarZexloracionComponent implements OnInit {
  p : number = 1 ;
  q : number = 1 ;

  Zexplora:any =[{}]
  Zexplora2:any =[{}]
  ListZEx : any;
  messageagregar:any;
  verficaragregar:any;
  alertagregar:any;
  messageagregar2:any;
  verficaragregar2:any;
  alertagregar2:any;
  messageagregar3:any;
  messageagregar4:any;
  zona:any;

  constructor(private dashservice:GestionarZexloracionService,
              private token:TokenStorageService,
              private route:Router,
              private fb:FormBuilder,
              private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getZonaExploracionHab()
    this.getZonaExploracionDeshab()
  }

  ngAfterContentChecked(){
    this.cd.detectChanges();
  }

  public ZonaExploracionAgregarForm = this.fb.group({
    nombreZonaExploracion: new FormControl(''),
    descripcionZonaExploracion: new FormControl(''),
  });

  public ZonaExploracionEditarForm = this.fb.group({
    nombreZonaExploracion: new FormControl(''),
    descripcionZonaExploracion: new FormControl(''),
  });

  guardar(event:any){
    console.log(event)
    this.zona = event;
    this.ZonaExploracionEditarForm.controls['nombreZonaExploracion'].setValue(this.zona.nombreZonaExploracion)
    this.ZonaExploracionEditarForm.controls['descripcionZonaExploracion'].setValue(this.zona.descripcionZonaExploracion)
  }

  getZonaExploracionHab(){
    var InfoMinera = this.token.getUser()
    this.dashservice.getZexploracionen(InfoMinera.idUsuario).subscribe(
      data => {
        this.Zexplora = data
        console.log(this.Zexplora)
      }
    );
  }

  getZonaExploracionDeshab(){
    var InfoMinera = this.token.getUser()
    this.dashservice.getZexploraciondis(InfoMinera.idUsuario).subscribe(
      data => {
        this.Zexplora2 = data
        console.log(this.Zexplora)
      }
    );
  }

  RegistrarZonaExploracion(){
    var InfoMinera = this.token.getProfile()
    var updateinfo: any = {
      nombreZonaExploracion: this.ZonaExploracionAgregarForm.controls['nombreZonaExploracion'].value,
      descripcionZonaExploracion: this.ZonaExploracionAgregarForm.controls['descripcionZonaExploracion'].value,
    }
    this.dashservice.RegistrarZonaExploracion(InfoMinera.idUsuario, updateinfo ).subscribe(
      data => {
        this.getZonaExploracionHab()
        this.messageagregar = data.message
        this.verficaragregar = true
        this.alertagregar = 'alert-success'
        setTimeout(() => {
          this.verficaragregar = false
        }, 5000);
        console.log(data)
      },      
      err => {
        this.messageagregar = err.error.message;
        this.verficaragregar = true
        this.alertagregar = 'alert-danger'
        setTimeout(() => {
          this.verficaragregar = false
        }, 5000);
        console.log(err);
      }
    )
  }

  UpdateZonaExploracion(){

    var updateinfo: any = {
      nombreZonaExploracion: this.ZonaExploracionEditarForm.controls['nombreZonaExploracion'].value,
      descripcionZonaExploracion: this.ZonaExploracionEditarForm.controls['descripcionZonaExploracion'].value,
    }
    this.dashservice.UpdateZonaExploracion(this.zona.idZonaExploracion, updateinfo ).subscribe(
      data => {
        this.getZonaExploracionHab()
        this.messageagregar2 = data.message
        this.verficaragregar2 = true
        this.alertagregar2 = 'alert-success'
        setTimeout(() => {
          this.verficaragregar2 = false
        }, 5000);
        console.log(data)
      },      
      err => {
        this.messageagregar2 = err.error.message;
        this.verficaragregar2 = true
        this.alertagregar2 = 'alert-danger'
        setTimeout(() => {
          this.verficaragregar2 = false
        }, 5000);
        console.log(err);
      }
    )
  }

  DeshabilitarZonaExploracion(event:any){
    
    var a = event.idZonaExploracion
    console.log(a)
    this.dashservice.DeshabilitarZonaExploracion(a).subscribe(
      data => {
        this.getZonaExploracionHab()
        this.getZonaExploracionDeshab()
        this.messageagregar3 = data.message
        console.log(data)
      },      
      err => {
        this.messageagregar3 = err.error.message;
        console.log(err);
      }
    )
  }

  HabilitarZonaExploracion(event:any){
    
    var a = event.idZonaExploracion
    console.log(a)
    this.dashservice.HabilitarZonaExploracion(a).subscribe(
      data => {
        this.getZonaExploracionHab()
        this.getZonaExploracionDeshab()
        this.messageagregar4 = data.message
        console.log(data)
      },      
      err => {
        this.messageagregar4 = err.error.message;
        console.log(err);
      }
    )
  }

}
