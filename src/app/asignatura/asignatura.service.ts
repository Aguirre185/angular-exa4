import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  api= URL_SERVICIOS;

  constructor(
    private http:HttpClient,
    ) { }
  
  getAsignatura():Observable<any>{
    return this.http.get<any>(this.api+"/asignatura/listarAsignatura")
  }
}
