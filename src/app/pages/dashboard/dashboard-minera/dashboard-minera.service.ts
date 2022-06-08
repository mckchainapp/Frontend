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
export class DashboardMineraService {

  private API_URL = GlobalUrl.BASE_URL + 'api/minera';
  private API_URL2 = GlobalUrl.BASE_URL + 'api/restore_password/request';


  constructor(private http: HttpClient) { }

  getProfileD(id:any): Observable <any> {
    return this.http.get(
      this.API_URL+`/${id}/profile`
    )
  }

  UpdateProfileD(id:any,body:any): Observable <any> {
    return this.http.put(
      this.API_URL+`/${id}/profile/update/info`,body,httpOptions
    )
  }

  UpdateFotoProfileD(id:any,logo:File): Observable <any> {
  
    var varr: FormData = new FormData();
      varr.append('logo', logo,logo.name);

    return this.http.put(
      this.API_URL+`/${id}/profile/update/logo`,varr
    )
  }

  SendUrlPasswordReset(passwordreset: any): Observable<any> {
    
    return this.http.post(
      this.API_URL2,
      passwordreset,
      httpOptions
    )
  }
  

}
