import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { SigninMineraComponent } from './signin-minera/signin-minera.component';
import { SigninEncargadoComponent } from './signin-encargado/signin-encargado.component';
import { SigninOperarioComponent } from './signin-operario/signin-operario.component';
import { SigninCompradorComponent } from './signin-comprador/signin-comprador.component';



@NgModule({
  declarations: [
    SigninAdminComponent,
    SigninMineraComponent,
    SigninEncargadoComponent,
    SigninOperarioComponent,
    SigninCompradorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
