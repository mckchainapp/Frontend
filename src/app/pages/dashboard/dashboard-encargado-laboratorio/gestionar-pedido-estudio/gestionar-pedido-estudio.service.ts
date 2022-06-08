import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GestionarPedidoEstudioService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';

  constructor(private http: HttpClient) { }
  

  getEstudioPendiente(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`encargadolaboratorio/${id}/pedidos/show/pending`
    )
  }

  postAnalisis(id:any, analisis:any): Observable <any> {
    return this.http.post(
      this.API_URL+`encargadolaboratorio/${id}/analisisley/save`,
      analisis,
      httpOptions
    )
  }
}
