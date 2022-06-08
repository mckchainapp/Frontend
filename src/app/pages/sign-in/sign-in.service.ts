import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';
import { UserSignin } from './sign-in-interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class SignInService {

  private API_URL = GlobalUrl.BASE_URL + 'api/signin/admin';
  private API_URL2 = GlobalUrl.BASE_URL + 'api/signin/minera';
  private API_URL3 = GlobalUrl.BASE_URL + 'api/signin/operario';
  private API_URL4 = GlobalUrl.BASE_URL + 'api/signin/encargadolaboratorio';
  private API_URL5 = GlobalUrl.BASE_URL + 'api/signin/comprador';

  constructor(private http: HttpClient) { }

  SignInUserAdmin(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL,
      usuario,
      httpOptions
    );
  }

  SignInUserMinera(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL2,
      usuario,
      httpOptions
    );
  }

  SignInUserOperario(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL3,
      usuario,
      httpOptions
    );
  }

  SignInUserEncargado(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL4,
      usuario,
      httpOptions
    );
  }
  
  SignInUserComprador(usuario: UserSignin): Observable<any> {
    return this.http.post(
      this.API_URL5,
      usuario,
      httpOptions
    );
  }
}
