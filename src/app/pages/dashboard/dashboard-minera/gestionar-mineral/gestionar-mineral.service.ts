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

export class GestionarMineralService {

  private API_URL = GlobalUrl.BASE_URL + 'api/minera';
  private API_URL_MIN = GlobalUrl.BASE_URL + 'api/mineral';

  constructor(private http: HttpClient) { }

  getzona(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/zonasexploracion/show/enable`
    )
  }  

  savezona(id:any, mineral:any): Observable <any> {
    return this.http.post(
      this.API_URL+`/${id}/mineral/save`,
      mineral,
      httpOptions
    )
  }  
  
  getMineralen(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/mineral/show/enable`
    )
  }

  getMineraldis(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/mineral/show/disable`
    )
  }

  DeshabilitarMineral(id:any): Observable <any> {
    return this.http.put(
      this.API_URL_MIN+`/${id}/disable`,
      httpOptions
    )
  }

  HabilitarMineral(id:any): Observable <any> {
    return this.http.put(
      this.API_URL_MIN+`/${id}/enable`,
      httpOptions
    )
  }

  UpdateMineral(id:any,body:any): Observable <any> {
    return this.http.put(
      this.API_URL_MIN+`/${id}/update`,
      body,
      httpOptions
    )
  }

}
