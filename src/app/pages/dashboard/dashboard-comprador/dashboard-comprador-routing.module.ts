import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardCompradorComponent } from './dashboard-comprador.component';

import { VerDatosMineraComponent } from './ver-datos-minera/ver-datos-minera.component';
import { VerEstadoProductoComponent } from './ver-estado-producto/ver-estado-producto.component';
import { PerfilCompradorComponent } from './perfil-comprador/perfil-comprador.component';
import { EditarCompradorComponent } from './editar-comprador/editar-comprador.component';
import { PedidosComponent } from './ver-estado-producto/pedidos/pedidos.component';


const routesDash : Routes = [
    {
      path: 'comprador', component: DashboardCompradorComponent,
      children: [
        { path: '', redirectTo: 'datos', pathMatch: 'full' },    
        { path: 'datos', component: VerDatosMineraComponent},
        { path: 'ver-estado', component: VerEstadoProductoComponent},
        { path: 'perfil', component: PerfilCompradorComponent},
        { path: 'perfil/editar', component: EditarCompradorComponent},
        { path: 'pedidos', component: PedidosComponent}
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
  
  export class DashboardCompradorRoutingModule { }