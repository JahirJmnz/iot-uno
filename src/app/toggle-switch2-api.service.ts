import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSwitch2ApiService {

  constructor(private http: HttpClient) { }

  updateComponentStatus(status: number): Observable<any> {
    const id = '65f0ad18efdef611de4c99cf'; // ID del elemento 'foco2'
    return this.http.put(`http://localhost:8080/api/componentes/${id}`, { elemento: 'foco2', status });
  }
}
