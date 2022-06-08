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
export class GestionarZexloracionService {

  private API_URL = GlobalUrl.BASE_URL + 'api/minera';
  private API_URL_MIN = GlobalUrl.BASE_URL + 'api/zonaexploracion';

  constructor(private http: HttpClient) { }

  getZexploracionen(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/zonasexploracion/show/enable`
    )
  }

  getZexploraciondis(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/zonasexploracion/show/disable`
    )
  }

  RegistrarZonaExploracion(id:any,body:any): Observable <any> {
    return this.http.post(
      this.API_URL+`/${id}/zonaexploracion/save`,body,httpOptions
    )
  }

  UpdateZonaExploracion(id:any,body:any): Observable <any> {
    return this.http.put(
      this.API_URL_MIN+`/${id}/update`,body,httpOptions
    )
  }

  DeshabilitarZonaExploracion(id:any): Observable <any> {
    return this.http.put(
      this.API_URL_MIN+`/${id}/disable`,httpOptions
    )
  }

  HabilitarZonaExploracion(id:any): Observable <any> {
    return this.http.put(
      this.API_URL_MIN+`/${id}/enable`,httpOptions
    )
  }

  
}
