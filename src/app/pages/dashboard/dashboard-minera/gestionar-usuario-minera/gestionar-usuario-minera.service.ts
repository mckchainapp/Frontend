import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GestionarUsuarioMineraService {

  private API_URL = GlobalUrl.BASE_URL + 'api/minera';

  constructor(private http: HttpClient) { }

  postOperarioSolicitud(id:any, email:any): Observable <any> {
    return this.http.post(
      this.API_URL+`/${id}/signup/operario_request`,  
      email,
      httpOptions
    )
  }

  postEncargadoSolicitud(id:any, email:any): Observable <any> {
    return this.http.post(
      this.API_URL+`/${id}/signup/encargadolaboratorio_request`,  
      email,
      httpOptions
    )
  }

}
