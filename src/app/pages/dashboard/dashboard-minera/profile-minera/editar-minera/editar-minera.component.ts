import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import {DashboardMineraService} from '../../dashboard-minera.service'

@Component({
  selector: 'app-editar-minera',
  templateUrl: './editar-minera.component.html',
  styleUrls: []
})
export class EditarMineraComponent implements OnInit {

  public MineraUpdateForm = this.fb.group({
  
    telefonoUsuario: new FormControl(''),
    webUsuario: new FormControl(''),
   
  });

  constructor(private fb: FormBuilder,private token : TokenStorageService,private dashservice:DashboardMineraService) { }

  ngOnInit(): void {


  }

  UpdateMinera(){
    var InfoMinera = this.token.getProfile()

    var updateinfo: any = {
      telefonoUsuario: this.MineraUpdateForm.controls['telefonoUsuario'].value,
      webUsuario: this.MineraUpdateForm.controls['webUsuario'].value,
    }

    this.dashservice.UpdateProfileD(InfoMinera.idUsuario, updateinfo ).subscribe(
      data => {
        window.location.reload();
      },
    )
  }

}
