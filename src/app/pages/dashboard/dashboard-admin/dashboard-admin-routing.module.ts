import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAdminComponent } from './dashboard-admin.component';

import { SolicitudesComponent } from './solicitudes/solicitudes.component';

import { CargarDataComponent } from './carga-datos/cargar-data/cargar-data.component';
import { DataComponent } from './carga-datos/data/data.component';

const routesDash : Routes = [
    {
      path: 'admin', component: DashboardAdminComponent,
      children: [
        { path: '', redirectTo: 'solicitudes', pathMatch: 'full' },    
        { path: 'solicitudes', component: SolicitudesComponent},
        { path: 'cargardata', component: CargarDataComponent},
        { path: 'listadata', component: DataComponent},
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
  
  export class DashboardAdminRountingModule { }