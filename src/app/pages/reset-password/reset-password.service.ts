import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private API_URL = GlobalUrl.BASE_URL + 'api/restore_password/request';
  private API_URL1 = GlobalUrl.BASE_URL + 'api';
  constructor(private http: HttpClient) { }

  SendUrlPasswordReset(passwordreset: any): Observable<any> {
    
    return this.http.post(
      this.API_URL,
      passwordreset,
      httpOptions
    )
  }

  PasswordUpdate(passwordUpdate: any): Observable<any> {

    return this.http.put(
      this.API_URL1 + `/restore_password/update`,
      passwordUpdate,
      httpOptions
      );
  }
  
}
