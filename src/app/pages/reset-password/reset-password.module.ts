import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RequestPasswordComponent } from './request-password/request-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';



@NgModule({
  declarations: [
    RequestPasswordComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ResetPasswordModule { }
