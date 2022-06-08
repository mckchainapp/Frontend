import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMineraComponent } from './dashboard-minera.component'; 

import { ProfileMineraComponent } from './profile-minera/profile-minera/profile-minera.component';

import { EstadoMineralComponent } from './estado-mineral/estado-mineral.component';
import { GenerarFacturaComponent } from './generar-factura/generar-factura.component';
import { GenerarGuiaComponent } from './generar-guia/generar-guia.component';

import { GestionarMineralComponent } from './gestionar-mineral/gestionar-mineral.component';

import { GestionarContratoComponent } from './gestionar-contrato/gestionar-contrato.component';

import { GestionarOperarioComponent } from './gestionar-usuario-minera/gestionar-operario/gestionar-operario.component';
import { GestionarEncargadoComponent } from './gestionar-usuario-minera/gestionar-encargado/gestionar-encargado.component';
import { EditarMineraComponent } from './profile-minera/editar-minera/editar-minera.component';
import { GestionarZexloracionComponent } from './gestionar-zexloracion/gestionar-zexloracion.component';

const routesDash : Routes = [
    {
      path: 'minera', component: DashboardMineraComponent,
      children: [
        { path: '', redirectTo: 'gestionar', pathMatch: 'full' },  
        { path: 'perfil', component: ProfileMineraComponent},
        { path: 'registar-perfil', component: ProfileMineraComponent},
        { path: 'perfil/editar', component: EditarMineraComponent},

        { path: 'gestionar/operario', component: GestionarOperarioComponent},
        { path: 'gestionar/encargado', component: GestionarEncargadoComponent},

        { path: 'estado', component: EstadoMineralComponent},
        { path: 'facturas', component: GenerarFacturaComponent},
        { path: 'guias', component: GenerarGuiaComponent},

        { path: 'gestionar', component: GestionarMineralComponent},

        { path: 'zonas-exploracion', component: GestionarZexloracionComponent},

        { path: 'contratos', component: GestionarContratoComponent},

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
  
  export class DashboardMineraRoutingModule { }