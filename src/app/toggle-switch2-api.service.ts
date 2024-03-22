import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSwitch2ApiService {

  constructor(private http: HttpClient) { }

  updateComponentStatus(id: string, status: number): Observable<any> {
    return this.http.put(`http://localhost:8080/api/componentes/${id}`, { elemento: 'foco2', status });
  }
}