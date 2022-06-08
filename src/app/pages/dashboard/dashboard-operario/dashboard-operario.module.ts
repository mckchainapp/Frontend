import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { DashboardOperarioRoutingModule } from './dashboard-operario-routing.module';

import { DashboardOperarioComponent } from './dashboard-operario.component';

import { ActualizarEstadoProductivoComponent } from './actualizar-estado-productivo/actualizar-estado-productivo.component';
import { EditarEstadoProductivoComponent } from './actualizar-estado-productivo/editar-estado-productivo/editar-estado-productivo.component';

import { ActualizarEstadoDistribucionComponent } from './actualizar-estado-distribucion/actualizar-estado-distribucion.component';
import { ProfileOperarioComponent } from './profile-operario/profile-operario.component';
import { EditarOperarioComponent } from './editar-operario/editar-operario.component';





@NgModule({
  declarations: [
    DashboardOperarioComponent,

    ActualizarEstadoProductivoComponent,
    ActualizarEstadoDistribucionComponent,
    ProfileOperarioComponent,
    EditarOperarioComponent,
    EditarEstadoProductivoComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    DashboardOperarioRoutingModule,
    ReactiveFormsModule,
    ImageCropperModule,
  ]
})
export class DashboardOperarioModule { }
