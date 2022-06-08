import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private API_URL = GlobalUrl.BASE_URL + 'api/signup/minera_request/display/generada';
  private API_URL2 = GlobalUrl.BASE_URL + 'api/signup/minera_request/display/approved';
  private API_URL3 = GlobalUrl.BASE_URL + 'api/signup/minera';

  constructor(private http: HttpClient) { }
  
  getSolicitudes(): Observable<any> {
    return this.http.get(
      this.API_URL,
      httpOptions
    );
  }

  getSolicitudesAprov(): Observable<any> {
    return this.http.get(
      this.API_URL2,
      httpOptions
    );
  }

  aprobarSolicitudes(id:any): Observable<any> {
    return this.http.post(
      `${this.API_URL3}/${id}/request/send/approved`,
      httpOptions
    );
  }

  rechazarSolicitudes(id:any): Observable<any> {
    return this.http.post(
      `${this.API_URL3}/${id}/request/send/rejected`,
      httpOptions
    );
  }

    
}
