import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardOperarioComponent } from './dashboard-operario.component';

import { ActualizarEstadoProductivoComponent } from './actualizar-estado-productivo/actualizar-estado-productivo.component';
import { EditarEstadoProductivoComponent } from './actualizar-estado-productivo/editar-estado-productivo/editar-estado-productivo.component';

import { ActualizarEstadoDistribucionComponent } from './actualizar-estado-distribucion/actualizar-estado-distribucion.component';
import { ProfileOperarioComponent } from './profile-operario/profile-operario.component';
import { EditarOperarioComponent } from './editar-operario/editar-operario.component';

const routesDash : Routes = [
    {
      path: 'operario', component: DashboardOperarioComponent,
      children: [
        { path: '', redirectTo: 'estado-productivo', pathMatch: 'full' },    
        { path: 'estado-productivo', component: ActualizarEstadoProductivoComponent},
        { path: 'estado-productivo/editar', component: EditarEstadoProductivoComponent},
        { path: 'estado-distribucion', component: ActualizarEstadoDistribucionComponent},
        { path: 'perfil', component: ProfileOperarioComponent},
        { path: 'perfil/editar', component: EditarOperarioComponent},
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
  
  export class DashboardOperarioRoutingModule { }