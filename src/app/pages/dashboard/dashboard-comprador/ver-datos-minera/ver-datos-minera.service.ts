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

export class VerDatosMineraService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';
  //api/mineral/show/all
  //aux = new File([], '');

  constructor(private http: HttpClient) { }
  
  getData(): Observable <any> {
    return this.http.get(
      this.API_URL+`reinfo/data/display`,  
      httpOptions
    )
  }

  
}
