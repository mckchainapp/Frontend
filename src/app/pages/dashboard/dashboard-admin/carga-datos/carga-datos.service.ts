import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const httpOptions = { 
  params: new HttpParams({
    fromObject:{    
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }    
  })
}

const httpOptions2 = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CargaDatosService {

  private API_URL = GlobalUrl.BASE_URL + 'api/';

  private API_DEPARTAMENTOS = GlobalUrl.BASE_URL + 'api/ubicacion/show/departamentos';
  private API_PROVINCIAS = GlobalUrl.BASE_URL + 'api/ubicacion/find/provincias/from_departamento';
  private API_DISTRITOS = GlobalUrl.BASE_URL + 'api/ubicacion/find/distritos/from_provincia';

  //aux = new File([], '');

  constructor(private http: HttpClient) { }

  /*UploadData(ex:File): Observable <any> {

    var archivo: FormData = new FormData();

    if (ex != null) {
      archivo.append('archivo', ex);
    }else {
      archivo.append('archivo', this.aux);
    }
    
    return this.http.post(
      this.API_URL+`reinfo/data/upload`,  
      archivo,
      httpOptions
    )
  }*/

  getDepartamentos(): Observable<any>  {
    return this.http.get(
      `${this.API_DEPARTAMENTOS}`
      );
  }

  getProvincias(id: any): Observable<any> {
    return this.http.get(
      `${this.API_PROVINCIAS}/${id}`
      );
  }

  getDistritos(id: any): Observable<any> {
    return this.http.get(
      `${this.API_DISTRITOS}/${id}`
      );
  }

  
  getData(): Observable <any> {
    return this.http.get(
      this.API_URL+`reinfo/data/display`,  
      httpOptions2
    )
  }

  registrarData(reinfoData:any): Observable <any> {
    return this.http.post(
      this.API_URL+`reinfo/data/upload`, 
      reinfoData, 
      httpOptions2
    )
  }


}
