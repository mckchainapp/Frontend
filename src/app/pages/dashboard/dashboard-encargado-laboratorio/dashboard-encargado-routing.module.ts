import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardEncargadoLaboratorioComponent } from './dashboard-encargado-laboratorio.component'; 
import { ProfileEncargadoComponent } from './profile-encargado/profile-encargado.component';
import { EditarEncargadoComponent } from './profile-encargado/editar-encargado/editar-encargado.component';
import { GestionarPedidoEstudioComponent } from './gestionar-pedido-estudio/gestionar-pedido-estudio.component';
import { GestionarAnalisisLeyComponent } from './gestionar-analisis-ley/gestionar-analisis-ley.component';

const routesDash : Routes = [
    {
      path: 'encargado', component: DashboardEncargadoLaboratorioComponent,
      children: [
        { path: '', redirectTo: 'gestionar/pedido', pathMatch: 'full' },
        { path: 'gestionar/pedido', component: GestionarPedidoEstudioComponent},
        { path: 'gestionar/analisis', component: GestionarAnalisisLeyComponent},
        { path: 'perfil', component: ProfileEncargadoComponent},
        { path: 'perfil/editar', component: EditarEncargadoComponent},
      ]
    }
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routesDash)
    ],
    exports: [RouterModule]
  })
  
  export class DashboardEncargadoLaboratorioRoutingModule { }