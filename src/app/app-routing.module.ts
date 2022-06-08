import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SigninAdminComponent } from './pages/sign-in/signin-admin/signin-admin.component';
import { SigninEncargadoComponent } from './pages/sign-in/signin-encargado/signin-encargado.component';
import { SigninMineraComponent } from './pages/sign-in/signin-minera/signin-minera.component';
import { SigninOperarioComponent } from './pages/sign-in/signin-operario/signin-operario.component';
import { SigninCompradorComponent } from './pages/sign-in/signin-comprador/signin-comprador.component';

import { SolicitudMineraComponent } from './pages/sign-up/signup-minera/solicitud-minera/solicitud-minera.component';

import { SignupCompradorComponent } from './pages/sign-up/signup-comprador/signup-comprador.component';
import { SignupMineraComponent } from './pages/sign-up/signup-minera/signup-minera/signup-minera.component';
import { SignupEncargadoComponent } from './pages/sign-up/signup-encargado/signup-encargado.component';
import { SignupOperarioComponent } from './pages/sign-up/signup-operario/signup-operario.component';
import { SignupCompradorVerifyComponent } from './pages/sign-up/signup-comprador/signup-comprador-verify/signup-comprador-verify.component';

import { RequestPasswordComponent } from './pages/reset-password/request-password/request-password.component';
import { UpdatePasswordComponent } from './pages/reset-password/update-password/update-password.component';

import { Error403Component } from './pages/error403/error403.component';

const routes: Routes = [

  { path: '', component: IndexComponent, data: { title: 'MckChain' } },
  { path: 'index', component: IndexComponent, data: { title: 'MckChain' } },

  //Signin
  { path: 'signin/admin', component: SigninAdminComponent, data: { title: 'Signin Admin' } },
  { path: 'signin/minera', component: SigninMineraComponent, data: { title: 'Signin Minera' } },
  { path: 'signin/encargado', component: SigninEncargadoComponent, data: { title: 'Signin Encargado' } },
  { path: 'signin/operario', component: SigninOperarioComponent, data: { title: 'Signin Operario' } },
  { path: 'signin/comprador', component: SigninCompradorComponent, data: { title: 'Signin Comprador' } },

  //Signup
  { path: 'solicitud/minera', component: SolicitudMineraComponent, data: { title: 'Solicitud Minera' } },

  { path: 'signup/minera/:token', component: SignupMineraComponent, data: { title: 'Signup Minera' } },
  { path: 'signup/encargado-laboratorio/:token', component: SignupEncargadoComponent, data: { title: 'Signup Encargado' } },
  { path: 'signup/operario/:token', component: SignupOperarioComponent, data: { title: 'Signup Operario' } },
  { path: 'signup/comprador', component: SignupCompradorComponent, data: { title: 'Signup Comprador' } },
  { path: 'signup/comprador/:token', component: SignupCompradorVerifyComponent, data: { title: 'Signup Comprador' } },
  { path: 'forgot/password', component: RequestPasswordComponent, data: { title: 'Restore Password' } },
  { path: 'restore/password/:token', component: UpdatePasswordComponent, data: { title: 'Update Password' } },

  { path: 'error/403', component: Error403Component, data: { title: 'Error' } },

  //Dashboard
  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-admin/dashboard-admin.module').then(module =>module.DashboardAdminModule)
  },
  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-encargado-laboratorio/dashboard-encargado-laboratorio.module').then(module =>module.DashboardEncargadoLaboratorioModule)
  },
  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-minera/dashboard-minera.module').then(module =>module.DashboardMineraModule)
  },
  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-operario/dashboard-operario.module').then(module =>module.DashboardOperarioModule)
  },
  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-operario/dashboard-operario.module').then(module =>module.DashboardOperarioModule)
  },
  {
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-comprador/dashboard-comprador.module').then(module =>module.DashboardCompradorModule)
  },
  /*{
    path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard-admin/dashboard-admin.module').then(module =>module.DashboardAdminModule)
  },*/
  { path: 'index', component: IndexComponent, data: { title: 'MckChain' } },

  { path: '**', redirectTo: 'index'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
