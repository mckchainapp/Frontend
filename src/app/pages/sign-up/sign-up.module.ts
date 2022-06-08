import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupMineraComponent } from './signup-minera/signup-minera/signup-minera.component';
import { SignupEncargadoComponent } from './signup-encargado/signup-encargado.component';
import { SignupOperarioComponent } from './signup-operario/signup-operario.component';
import { SignupCompradorComponent } from './signup-comprador/signup-comprador.component';

import { SolicitudMineraComponent } from './signup-minera/solicitud-minera/solicitud-minera.component';
import { SignupCompradorVerifyComponent } from './signup-comprador/signup-comprador-verify/signup-comprador-verify.component';



@NgModule({
  declarations: [
    SignupMineraComponent,
    SignupEncargadoComponent,
    SignupOperarioComponent,
    SignupCompradorComponent,
    SolicitudMineraComponent,
    SignupCompradorVerifyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
