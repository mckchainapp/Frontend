import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { authInterceptorProviders } from './util/auth.interceptor';

//index
import { IndexModule } from './pages/index/index.module';
//Signup
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { SignInModule } from './pages/sign-in/sign-in.module';

//Password
import { ResetPasswordModule } from './pages/reset-password/reset-password.module';

//Dashboard
import { DashboardAdminModule } from './pages/dashboard/dashboard-admin/dashboard-admin.module';
import { DashboardMineraModule } from './pages/dashboard/dashboard-minera/dashboard-minera.module';
import { DashboardOperarioModule } from './pages/dashboard/dashboard-operario/dashboard-operario.module';
import { DashboardEncargadoLaboratorioModule } from './pages/dashboard/dashboard-encargado-laboratorio/dashboard-encargado-laboratorio.module';

import { Error403Module } from './pages/error403/error403.module';
import { DashboardCompradorComponent } from './pages/dashboard/dashboard-comprador/dashboard-comprador.component';
import { DashboardCompradorModule } from './pages/dashboard/dashboard-comprador/dashboard-comprador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    IndexModule,
    
    SignUpModule,
    SignInModule,
    ResetPasswordModule,
    
    DashboardAdminModule,
    DashboardMineraModule,
    DashboardOperarioModule,
    DashboardEncargadoLaboratorioModule,
    DashboardCompradorModule,

    Error403Module
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
