import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardMineraRoutingModule } from './dashboard-minera-routing.module';

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
import { ImageCropperModule } from 'ngx-image-cropper';
import { GestionarZexloracionComponent } from './gestionar-zexloracion/gestionar-zexloracion.component';

@NgModule({
  declarations: [
    DashboardMineraComponent,
    
    ProfileMineraComponent,

    EstadoMineralComponent,
    GenerarFacturaComponent,
    GenerarGuiaComponent,

    GestionarMineralComponent,
    
    GestionarContratoComponent,
    GestionarOperarioComponent,
    GestionarEncargadoComponent,
    EditarMineraComponent,
    GestionarZexloracionComponent,
       
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    DashboardMineraRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
  ]
})
export class DashboardMineraModule { }
