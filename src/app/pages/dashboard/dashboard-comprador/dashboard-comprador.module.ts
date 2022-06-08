import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardCompradorRoutingModule } from './dashboard-comprador-routing.module';

import { DashboardCompradorComponent } from './dashboard-comprador.component';

import { VerDatosMineraComponent } from './ver-datos-minera/ver-datos-minera.component';
import { VerEstadoProductoComponent } from './ver-estado-producto/ver-estado-producto.component';
import { PerfilCompradorComponent } from './perfil-comprador/perfil-comprador.component';
import { EditarCompradorComponent } from './editar-comprador/editar-comprador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PedidosComponent } from './ver-estado-producto/pedidos/pedidos.component';



@NgModule({
  declarations: [
    DashboardCompradorComponent,
    VerDatosMineraComponent,
    VerEstadoProductoComponent,
    PerfilCompradorComponent,
    EditarCompradorComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    DashboardCompradorRoutingModule,
    ReactiveFormsModule,
    ImageCropperModule
  ]
})
export class DashboardCompradorModule { }
