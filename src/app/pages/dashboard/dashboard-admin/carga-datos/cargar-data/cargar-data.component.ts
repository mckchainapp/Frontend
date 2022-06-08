import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/pages/tools/custom-validator';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { CargaDatosService } from '../carga-datos.service';

@Component({
  selector: 'app-cargar-data',
  templateUrl: './cargar-data.component.html',
  styleUrls: []
})
export class CargarDataComponent implements OnInit {

  /*files: File[] = [];
  disabled = true;
  message: any;
  viewMessageSuccess = false;
  viewMessageDanger = false;*/
  p : number = 1 ;

  dataSource = [] as any;
  dataSource2 = [] as any;
  CapturaProv: any;

  CurrentDepartamentos: any;
  CurrentProvincias: any;
  CurrentDistritos: any;

  CurrentProvincias2: any;
  CurrentDistritos2: any;

  viewProvincia = false;
  viewDistrito = false;
  viewProvincia2 = false;
  viewDistrito2 = false;

  Estado = [
    {estado : 'VIGENTE'},
    {estado : 'SUSPENDIDO'}
  ]

  Departamento: any;
  Provincia: any;
  Distrito: any;

  idDepartamento: any;
  idProvincia: any;
  idDistrito: any;

  ListMinera: any;
  idEditList: any;
  constructor(private token : TokenStorageService,
              private cargadatosService : CargaDatosService,
              private fb: FormBuilder,
              private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getProfile()
    this.getDep()
  }

  ngAfterContentChecked(){
    this.cd.detectChanges();
  }

  public mineraRegistroForm = this.fb.group({
    codigounicoMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    estadoactividadMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    rucMinera: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(10000000000),
      Validators.max(99999999999)
    ])),
    nombreMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    departamentoMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    provinciaMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    distritoMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
  });

  public mineraUpdateForm = this.fb.group({
    codigounicoMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    estadoactividadMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    rucMinera: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(10000000000),
      Validators.max(99999999999)
    ])),
    nombreMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    departamentoMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    provinciaMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
    distritoMinera: new FormControl('', Validators.compose([
      Validators.required
    ])),
  });

  /*onSelect(event:any) {

    this.viewMessageSuccess = false;
    this.viewMessageDanger = false;

    if(this.files[0]){
    }else{
      this.files.push(...event.addedFiles);
      this.disabled = false;
    }
    console.log(this.files[0])  
  }

  uploadCv(){
    console.log(this.files[0])
    if(this.files[0] !== null || this.files[0] !== undefined){
      console.log(this.files[0])
      this.cargadatosService.UploadData(this.files[0]).subscribe(
        data => { 
          this.message = data.message;
          this.viewMessageSuccess = true;
          this.viewMessageDanger = false;
          this.disabled = true;
          console.log(this.message)            
        },
        err => {
          this.message = err.message;
          this.viewMessageSuccess = false;
          this.viewMessageDanger = true;
          console.log(err)           
        }
      );
    }else{
      this.disabled = false;
    }
  }

  onRemove(event:any) {
    console.log(event);
    this.viewMessageSuccess = false;
    this.viewMessageDanger = false;
    this.files.splice(this.files.indexOf(event), 1);
    this.disabled = true;
  }*/

  getDep(){
    this.cargadatosService.getDepartamentos().subscribe(
      data => {      
        this.CurrentDepartamentos = data.sort((a: any, b: any) => a.idDepartamento - b.idDepartamento);
      }  
    );    
  }

  ViewProv(idDepartamento:any){

    this.viewDistrito = false;
    let idDep = idDepartamento.target.value;
    this.mineraRegistroForm.controls['provinciaMinera'].patchValue('')
    this.mineraRegistroForm.controls['provinciaMinera'].updateValueAndValidity()
    this.cargadatosService.getProvincias(idDep).subscribe(
      data => {       
        this.CurrentProvincias = data; 
        this.viewProvincia = true;        
      },      
    );

    for (let i = 0; i < this.CurrentDepartamentos.length; i++) {
      if(this.CurrentDepartamentos[i].idDepartamento == this.mineraRegistroForm.controls['departamentoMinera'].value){
        this.idDepartamento = this.CurrentDepartamentos[i].idDepartamento
        this.Departamento = this.CurrentDepartamentos[i].nombreDepartamento
      }
    }

  }  

  ViewDist(idProvincia:any){

    let idProv = idProvincia.target.value;
    this.CapturaProv = idProv;

    this.mineraRegistroForm.controls['distritoMinera'].patchValue('')
    this.mineraRegistroForm.controls['distritoMinera'].updateValueAndValidity()

    this.cargadatosService.getDistritos(idProv).subscribe(
      data => {  
        this.CurrentDistritos = data.sort((a: any, b: any) => a.idDistrito - b.idDistrito);           
        this.viewDistrito = true;
        }            
    );

    for (let i = 0; i < this.CurrentProvincias.length; i++) {
      if(this.CurrentProvincias[i].idProvincia == this.mineraRegistroForm.controls['provinciaMinera'].value){
        this.idProvincia = this.CurrentProvincias[i].idProvincia
        this.Provincia = this.CurrentProvincias[i].nombreProvincia
      }
    }
  }

  selectNombrDist(){
    for (let i = 0; i < this.CurrentDistritos.length; i++) {
      if(this.CurrentDistritos[i].idDistrito == this.mineraRegistroForm.controls['distritoMinera'].value){
        this.idDistrito = this.CurrentDistritos[i].idDistrito
        this.Distrito = this.CurrentDistritos[i].nombreDistrito
      }
    }

  }

  getProfile(){
    this.token.getUser();
    console.log(this.token.getUser())
  }

  agregarMinera(){

    var a = this.dataSource.length-1;
    
    if(this.dataSource[0] == undefined){
      var dato: any = {
        id: 1,
        codigounicoMinera : this.mineraRegistroForm.controls['codigounicoMinera'].value,
        estadoactividadMinera : this.mineraRegistroForm.controls['estadoactividadMinera'].value,
        rucMinera : this.mineraRegistroForm.controls['rucMinera'].value,
        nombreMinera : this.mineraRegistroForm.controls['nombreMinera'].value,
        iddepartamentoMinera : this.idDepartamento,
        idprovinciaMinera : this.idProvincia,
        iddistritoMinera : this.idDistrito,
        departamentoMinera : this.Departamento,
        provinciaMinera : this.Provincia,
        distritoMinera : this.Distrito
      }

      this.dataSource.push(dato);
    }else{

      var dato: any = {
        id: a+2,
        codigounicoMinera : this.mineraRegistroForm.controls['codigounicoMinera'].value,
        estadoactividadMinera : this.mineraRegistroForm.controls['estadoactividadMinera'].value,
        rucMinera : this.mineraRegistroForm.controls['rucMinera'].value,
        nombreMinera : this.mineraRegistroForm.controls['nombreMinera'].value,
        iddepartamentoMinera : this.idDepartamento,
        idprovinciaMinera : this.idProvincia,
        iddistritoMinera : this.idDistrito,
        departamentoMinera : this.Departamento,
        provinciaMinera : this.Provincia,
        distritoMinera : this.Distrito
      }
        
      this.dataSource.push(dato);
    }

    this.mineraRegistroForm.reset()
    this.viewProvincia = false;
    this.viewDistrito = false;
    this.mineraRegistroForm.controls['departamentoMinera'].patchValue('')
    this.mineraRegistroForm.controls['estadoactividadMinera'].patchValue('')
    this.mineraRegistroForm.controls['departamentoMinera'].updateValueAndValidity()
    this.mineraRegistroForm.controls['estadoactividadMinera'].updateValueAndValidity()
  }

  seleccionarMinera(list:any){
    this.ListMinera = list;
    this.idEditList = this.ListMinera.id - 1;

    this.viewProvincia2 = true;
    this.viewDistrito2 = true;
    
    this.mineraUpdateForm.controls['codigounicoMinera'].patchValue(this.ListMinera.codigounicoMinera)
    this.mineraUpdateForm.controls['estadoactividadMinera'].patchValue(this.ListMinera.estadoactividadMinera)
    this.mineraUpdateForm.controls['rucMinera'].patchValue(this.ListMinera.rucMinera)
    this.mineraUpdateForm.controls['nombreMinera'].patchValue(this.ListMinera.nombreMinera)
    this.mineraUpdateForm.controls['departamentoMinera'].patchValue(this.ListMinera.iddepartamentoMinera)

    this.cargadatosService.getProvincias(this.ListMinera.iddepartamentoMinera).subscribe(
      data => {       
        this.CurrentProvincias2 = data; 
        this.mineraUpdateForm.controls['provinciaMinera'].patchValue(this.ListMinera.idprovinciaMinera)
        this.viewProvincia2 = true;   

        for (let i = 0; i < this.CurrentProvincias2.length; i++) {
          if(this.CurrentProvincias2[i].idProvincia == this.ListMinera.idprovinciaMinera){
            this.idProvincia = this.CurrentProvincias2[i].idProvincia
            this.Provincia = this.CurrentProvincias2[i].nombreProvincia
          }
        }  

      },      
    );

    this.cargadatosService.getDistritos(this.ListMinera.idprovinciaMinera).subscribe(
      data => {       
        this.CurrentDistritos2 = data; 
        this.mineraUpdateForm.controls['distritoMinera'].patchValue(this.ListMinera.iddistritoMinera)
        this.viewProvincia2 = true;   

        for (let i = 0; i < this.CurrentDistritos2.length; i++) {
          if(this.CurrentDistritos2[i].idDistrito == this.ListMinera.iddistritoMinera){
            this.idDistrito = this.CurrentDistritos2[i].idDistrito
            this.Distrito = this.CurrentDistritos2[i].nombreDistrito
          }
        }

      },      
    );

    for (let i = 0; i < this.CurrentDepartamentos.length; i++) {
      if(this.CurrentDepartamentos[i].idDepartamento == this.ListMinera.iddepartamentoMinera){
        this.idDepartamento = this.CurrentDepartamentos[i].idDepartamento
        this.Departamento = this.CurrentDepartamentos[i].nombreDepartamento
      }
    }

  }

  ViewProv2(idDepartamento:any){

    this.viewDistrito2 = false;
    let idDep = idDepartamento.target.value;

    this.mineraUpdateForm.controls['provinciaMinera'].patchValue('')

    this.cargadatosService.getProvincias(idDep).subscribe(
      data => {       
        this.CurrentProvincias2 = data; 
        this.viewProvincia2 = true;        
      },      
    );

    for (let i = 0; i < this.CurrentDepartamentos.length; i++) {
      if(this.CurrentDepartamentos[i].idDepartamento == this.mineraUpdateForm.controls['departamentoMinera'].value){
        this.idDepartamento = this.CurrentDepartamentos[i].idDepartamento
        this.Departamento = this.CurrentDepartamentos[i].nombreDepartamento
      }
    }

  } 

  ViewDist2(idProvincia:any){

    let idProv = idProvincia.target.value;

    this.mineraUpdateForm.controls['distritoMinera'].patchValue('')

    this.cargadatosService.getDistritos(idProv).subscribe(
      data => {  
        this.CurrentDistritos2 = data.sort((a: any, b: any) => a.idDistrito - b.idDistrito);           
        this.viewDistrito2 = true;
        }            
    );

    for (let i = 0; i < this.CurrentProvincias2.length; i++) {
      if(this.CurrentProvincias2[i].idProvincia == this.mineraUpdateForm.controls['provinciaMinera'].value){
        this.idProvincia = this.CurrentProvincias2[i].idProvincia
        this.Provincia = this.CurrentProvincias2[i].nombreProvincia
      }
    }
  }
  
  selectNombrDist2(){
    for (let i = 0; i < this.CurrentDistritos2.length; i++) {
      if(this.CurrentDistritos2[i].idDistrito == this.mineraUpdateForm.controls['distritoMinera'].value){
        this.idDistrito = this.CurrentDistritos2[i].idDistrito
        this.Distrito = this.CurrentDistritos2[i].nombreDistrito
      }
    }
  }

  editarMinera(){
    this.dataSource[this.idEditList].codigounicoMinera = this.mineraUpdateForm.controls['codigounicoMinera'].value;
    this.dataSource[this.idEditList].estadoactividadMinera = this.mineraUpdateForm.controls['estadoactividadMinera'].value;
    this.dataSource[this.idEditList].rucMinera = this.mineraUpdateForm.controls['rucMinera'].value;
    this.dataSource[this.idEditList].nombreMinera = this.mineraUpdateForm.controls['nombreMinera'].value;
    this.dataSource[this.idEditList].iddepartamentoMinera = this.idDepartamento,
    this.dataSource[this.idEditList].idprovinciaMinera = this.idProvincia,
    this.dataSource[this.idEditList].iddistritoMinera = this.idDistrito,
    this.dataSource[this.idEditList].departamentoMinera = this.Departamento,
    this.dataSource[this.idEditList].provinciaMinera = this.Provincia,
    this.dataSource[this.idEditList].distritoMinera = this.Distrito
  }

  eliminarMinera(list:any){
    this.dataSource = this.dataSource.filter((item: { codigounicoMinera: number; }) => item.codigounicoMinera !== list.codigounicoMinera)
  }
  
  enviarData(){

    this.dataSource2 = this.dataSource

    this.dataSource2.forEach(
      function(
        v: { iddepartamentoMinera: any;}
      )
      { delete v.iddepartamentoMinera }
    );

    this.dataSource2.forEach(
      function(
        v: { idprovinciaMinera: any;}
      )
      { delete v.idprovinciaMinera }
    );

    this.dataSource2.forEach(
      function(
        v: { iddistritoMinera: any;}
      )
      { delete v.iddistritoMinera }
    );

    this.dataSource2.forEach(
      function(
        v: { id: any;}
      )
      { delete v.id }
    );

    var reinfoData: any = {
      reinfoData : this.dataSource2
    }

    console.log(reinfoData)
    this.cargadatosService.registrarData(reinfoData).subscribe(
      data => {  
        console.log(data);  
        window.location.href='admin/listadata'
        }            
    );
  }



}

