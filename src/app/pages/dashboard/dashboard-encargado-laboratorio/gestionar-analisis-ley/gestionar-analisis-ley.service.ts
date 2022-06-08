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
export class GestionarAnalisisLeyService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';

  constructor(private http: HttpClient) { }
  

  getAnalisisEnable(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`encargadolaboratorio/${id}/analisisley/show/enable`
    )
  }

  getAnalisisDisable(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`encargadolaboratorio/${id}/analisisley/show/disable`
    )
  }

  putAnalisisDisable(id:any): Observable <any> {
    return this.http.put(
      this.API_URL+`analisisley/${id}/disable`,
      httpOptions
    )
  }

  putAnalisisEnable(id:any): Observable <any> {
    return this.http.put(
      this.API_URL+`analisisley/${id}/enable`,
      httpOptions
    )
  }

  putAnalisis(id:any, analisis:any): Observable <any> {
    return this.http.put(
      this.API_URL+`analisisley/${id}/update`,
      analisis,
      httpOptions
    )
  }

}
