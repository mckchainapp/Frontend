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
export class VerEstadoProductoService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';


  constructor(private http: HttpClient) { }

  getMineral(): Observable <any> {
    return this.http.get(
      this.API_URL+`mineral/show/all`,  
      httpOptions
    )
  }

  postPedido(id:any, mineral:any): Observable <any> {
    return this.http.post(
      this.API_URL+`comprador/${id}/pedido/save`,
      mineral,
      httpOptions
    )
  }

  getPedidot(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`comprador/${id}/pedido/show/done`
    )
  }

  getPedidopr(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`comprador/${id}/pedido/show/processing`
    )
  }

  getPedidop(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`comprador/${id}/pedido/show/pending`
    )
  }

  solicitarEstudio(id:any): Observable <any> {
    return this.http.put(
      this.API_URL+`pedido/${id}/estado/update/processing`,
      httpOptions
    )
  }

  getDetalle(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`analisisley/${id}/show/detail`
    )
  }

  getSmart(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`analisisley/${id}/detail/send/smartcontract`
    )
  }
  
}
