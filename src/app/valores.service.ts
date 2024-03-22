import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValoresService {
  private apiUrl: string = 'http://localhost:8080/api/valores';

  constructor(private http: HttpClient) { }

  // Método para obtener los 10 valores de temperatura y humedad más recientes
  getValores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?_limit=10&_sort=fecha&_order=desc`);
  }
}
