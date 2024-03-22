import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSwitch3ApiService {

  constructor(private http: HttpClient) { }

  updateComponentStatus(status: number): Observable<any> {
    const id = '65f0ad1fefdef611de4c99d0'; // ID del elemento 'foco3'
    return this.http.put(`http://localhost:8080/api/componentes/${id}`, { elemento: 'foco3', status });
  }
}
