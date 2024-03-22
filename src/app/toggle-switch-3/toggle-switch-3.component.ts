import { Component, OnInit } from '@angular/core';
import { ToggleSwitch3ApiService } from '../toggle-switch3-api.service';

@Component({
  selector: 'app-toggle-switch-3',
  templateUrl: './toggle-switch-3.component.html',
  styleUrl: './toggle-switch-3.component.css'
})
export class ToggleSwitchComponent3 implements OnInit {

  constructor(private apiService: ToggleSwitch3ApiService) { }

  ngOnInit(): void {
  }

  toggleSwitch(event: any) {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const status = checked ? 1 : 0;
      const id = '65f0ad1fefdef611de4c99d0'; // ID del elemento 'foco1'

      this.apiService.updateComponentStatus(id, status)
        .subscribe(
          () => {
            console.log('Estado actualizado correctamente');
          },
          error => {
            console.error('Error al actualizar el estado:', error);
          }
        );
    }
  }

}

