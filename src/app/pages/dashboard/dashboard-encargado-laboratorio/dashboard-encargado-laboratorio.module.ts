import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardEncargadoLaboratorioRoutingModule } from './dashboard-encargado-routing.module';

import { DashboardEncargadoLaboratorioComponent } from './dashboard-encargado-laboratorio.component';
import { ProfileEncargadoComponent } from './profile-encargado/profile-encargado.component';
import { EditarEncargadoComponent } from './profile-encargado/editar-encargado/editar-encargado.component';
import { GestionarPedidoEstudioComponent } from './gestionar-pedido-estudio/gestionar-pedido-estudio.component';
import { GestionarAnalisisLeyComponent } from './gestionar-analisis-ley/gestionar-analisis-ley.component';

@NgModule({
  declarations: [
    DashboardEncargadoLaboratorioComponent,
    ProfileEncargadoComponent,
    EditarEncargadoComponent,
    GestionarPedidoEstudioComponent,
    GestionarAnalisisLeyComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    DashboardEncargadoLaboratorioRoutingModule
  ]
})
export class DashboardEncargadoLaboratorioModule { }
