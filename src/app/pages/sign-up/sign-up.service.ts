import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';
import { CompradorSignup, EmpresaSolicitud, EncargadoSignup, OperarioSignup } from './sign-up-interface';
import { EmpresaSignup } from './sign-up-interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  private API_URL = GlobalUrl.BASE_URL + 'api/signup/minera_request';
  private API_URL2 = GlobalUrl.BASE_URL + 'api/signup/minera';
  private API_URL3 = GlobalUrl.BASE_URL + 'api/signup/operario';
  private API_URL4 = GlobalUrl.BASE_URL + 'api/signup/encargadolaboratorio ';
  private API_URL5 = GlobalUrl.BASE_URL + 'api/signup/comprador';

  constructor(private http: HttpClient) { }

  SolicitudMinera(solicitud: EmpresaSolicitud): Observable<any> {
    return this.http.post(
      this.API_URL,
      solicitud,
      httpOptions
    );
  }

  SignUpMinera(minera: EmpresaSignup): Observable<any> {
    return this.http.post(
      this.API_URL2,
      minera,
      httpOptions
    );
  }

  SignUpOperario(operario: OperarioSignup): Observable<any> {
    return this.http.post(
      this.API_URL3,
      operario,
      httpOptions
    );
  }

  SignUpEncargado(encargado: EncargadoSignup): Observable<any> {
    return this.http.post(
      this.API_URL4,
      encargado,
      httpOptions
    );
  }

  SignUpComprador(comprador: CompradorSignup): Observable<any> {
    return this.http.post(
      this.API_URL5,
      comprador,
      httpOptions
    );
  }

  SignUpCompradorVerify(comprador: any): Observable<any> {
    return this.http.post(
      this.API_URL5+'/verify',
      comprador,
      httpOptions
    );
  }

}
