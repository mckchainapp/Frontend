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
export class ActualizarEstadoProductivoService {

  private API_URL = GlobalUrl.BASE_URL + 'api/minera';
  private API_URL2 = GlobalUrl.BASE_URL + 'api/mineral';

  constructor(private http: HttpClient) { }

  getMineralen(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/mineral/show/enable`
    )
  }

  updateMineral(id:any, mineral:any): Observable <any> {
    return this.http.put(
      this.API_URL2+`/${id}/phase/update`,
      mineral,
      httpOptions
    )
  }

}
