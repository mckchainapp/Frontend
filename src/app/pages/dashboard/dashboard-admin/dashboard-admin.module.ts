import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { DashboardAdminRountingModule } from './dashboard-admin-routing.module';

import { DashboardAdminComponent } from './dashboard-admin.component';

import { SolicitudesComponent } from './solicitudes/solicitudes.component';

import { CargarDataComponent } from './carga-datos/cargar-data/cargar-data.component';
import { DataComponent } from './carga-datos/data/data.component';

import { SolicitudPendientePipe } from './pipe-admin/solicitud-pendiente.pipe';
import { SolicitudAprobadaPipe } from './pipe-admin/solicitud-aprobada.pipe';
import { DatosCodigoPipe } from './pipe-admin/datos-codigo.pipe';
import { DatosEstadoPipe } from './pipe-admin/datos-estado.pipe';
import { DatosNombrePipe } from './pipe-admin/datos-nombre.pipe';
import { DatosRucPipe } from './pipe-admin/datos-ruc.pipe';

@NgModule({
  declarations: [
  
    DashboardAdminComponent,
       SolicitudesComponent,
       
       CargarDataComponent,
       DataComponent,
       
       SolicitudPendientePipe,
       SolicitudAprobadaPipe,
       DatosCodigoPipe,
       DatosEstadoPipe,
       DatosNombrePipe,
       DatosRucPipe
  ],
  imports: [
    CommonModule,
    DashboardAdminRountingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxDropzoneModule
  ]
})
export class DashboardAdminModule { }
