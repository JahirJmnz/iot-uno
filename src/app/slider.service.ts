import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private apiUrl: string = 'http://localhost:8080/api/componentes/65f0b8a51d77d75c8a2ec245';

  constructor(private http: HttpClient) { }

  updateServoPosition(position: number): Observable<any> {
    return this.http.put(this.apiUrl, { elemento: 'servoPos', status: position });
  }
}
