import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {Router} from '@angular/router'
import { FormBuilder, FormControl } from '@angular/forms';
import { GestionarMineralService } from './gestionar-mineral.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestionar-mineral',
  templateUrl: './gestionar-mineral.component.html',
  styleUrls: []
})
export class GestionarMineralComponent implements OnInit {

  p : number = 1 ;
  q : number = 1 ;
  
  zona: any;
  pipe = new DatePipe('en-US');
  minerales: any;
  message: any;
  message2: any;
  verficar = false;
  verficar2 = false;
  alert: any;
  alert2: any;
  mineralesdes: any;
  messageagregar:any;
  messageagregar2:any;
  listmineral: any;

  constructor(private dashservice:GestionarMineralService,
              private token:TokenStorageService,
              private route:Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getMineralesEn()
    this.getMineralesDis()
    this.mostrarZonaEx()
  }

  public ZonaExploracionForm = this.fb.group({
    zonaexploracionMineral: new FormControl(''),
    fechaextraccionMineral: new FormControl(''),
    nombreMineral: new FormControl(''),
    tipomuestraMineral: new FormControl('')
  });

  public ZonaExploracionUpdateForm = this.fb.group({
    zonaexploracionMineral: new FormControl(''),
    fechaextraccionMineral: new FormControl(''),
    nombreMineral: new FormControl(''),
    tipomuestraMineral: new FormControl('')
  });

  getMineralesEn(){
    var InfoMinera = this.token.getUser()
    this.dashservice.getMineralen(InfoMinera.idUsuario).subscribe(
      data => {
        this.minerales = data;
        console.log(data)
      }
    );
  }

  getMineralesDis(){
    var InfoMinera = this.token.getUser()
    this.dashservice.getMineraldis(InfoMinera.idUsuario).subscribe(
      data => {
        this.mineralesdes = data
        console.log(data)
      }
    );
  }

  mostrarZonaEx(){
    var a = this.token.getUser()
    console.log(a)
    this.dashservice.getzona(a.idUsuario).subscribe(
      data => {
        this.zona = data;
      },
    )
  }

  registrar(){
    var a = this.token.getUser()

    var updateinfo: any = {
      zonaexploracionMineral: this.ZonaExploracionForm.controls['zonaexploracionMineral'].value,
      fechaextraccionMineral: this.pipe.transform(this.ZonaExploracionForm.controls['fechaextraccionMineral'].value, 'dd-MM-yyyy'),
      nombreMineral: this.ZonaExploracionForm.controls['nombreMineral'].value,
      tipomuestraMineral: this.ZonaExploracionForm.controls['tipomuestraMineral'].value,
    }
    
    this.dashservice.savezona(a.idUsuario, updateinfo).subscribe(
      data => {
        this.getMineralesEn()
        this.message = data.message
        this.verficar = true
        this.alert = 'alert-success'
        setTimeout(() => {
          this.verficar = false
        }, 5000);
      },      
      err => {
        this.message = err.error.message;
        this.verficar = true
        this.alert = 'alert-danger'
        setTimeout(() => {
          this.verficar = false
        }, 5000);
      }
    )
  }

  Seleccionar(event:any){
    var a = event;
    this.listmineral = event.idMineral
    console.log(a)
    this.ZonaExploracionUpdateForm.controls['zonaexploracionMineral'].patchValue(a.idzonaexploracionMineral)
    this.ZonaExploracionUpdateForm.controls['fechaextraccionMineral'].setValue(a.fechaextraccionMineral)
    this.ZonaExploracionUpdateForm.controls['nombreMineral'].setValue(a.nombreMineral)
    this.ZonaExploracionUpdateForm.controls['tipomuestraMineral'].setValue(a.tipomuestraMineral)
  }

  actualizar(){

    var updateinfo: any = {
      zonaexploracionMineral: this.ZonaExploracionUpdateForm.controls['zonaexploracionMineral'].value,
      fechaextraccionMineral: this.pipe.transform(this.ZonaExploracionUpdateForm.controls['fechaextraccionMineral'].value, 'dd-MM-yyyy'),
      nombreMineral: this.ZonaExploracionUpdateForm.controls['nombreMineral'].value,
      tipomuestraMineral: this.ZonaExploracionUpdateForm.controls['tipomuestraMineral'].value,
    }

    console.log(updateinfo)

    this.dashservice.UpdateMineral(this.listmineral, updateinfo).subscribe(
      data => {
        this.getMineralesEn()
        console.log(data)
        this.message2 = data.message
        this.verficar2 = true
        this.alert2 = 'alert-success'
        setTimeout(() => {
          this.verficar2 = false
        }, 5000);
      },      
      err => {
        this.message2 = err.error.message;
        this.verficar = true
        this.alert2 = 'alert-danger'
        setTimeout(() => {
          this.verficar2 = false
        }, 5000);
      }
    )
  }

  InhabilitarMineral(event:any){
    var a = event
    console.log(a)
    this.dashservice.DeshabilitarMineral(a.idMineral).subscribe(
      data => {
        this.getMineralesEn()
        this.getMineralesDis()
        this.messageagregar = data.message
        console.log(data)
      },      
      err => {
        this.messageagregar = err.error.message;
        console.log(err);
      }
    )
  }

  HabilitarMineral(event:any){
    
    var a = event
    console.log(a)
    this.dashservice.HabilitarMineral(a.idMineral).subscribe(
      data => {
        this.getMineralesEn()
        this.getMineralesDis()
        this.messageagregar2 = data.message
        console.log(data)
      },      
      err => {
        this.messageagregar2 = err.error.message;
        console.log(err);
      }
    )
  }


}
