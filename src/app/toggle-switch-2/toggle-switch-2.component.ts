import { Component, OnInit } from '@angular/core';
import { ToggleSwitch2ApiService } from '../toggle-switch2-api.service';

@Component({
  selector: 'app-toggle-switch-2',
  templateUrl: './toggle-switch-2.component.html',
  styleUrl: './toggle-switch-2.component.css'
})
export class ToggleSwitchComponent2 implements OnInit {

  constructor(private apiService: ToggleSwitch2ApiService) { }

  ngOnInit(): void {
  }

  toggleSwitch2(event: any) {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const status = checked ? 1 : 0;
      const id = '65f0ad18efdef611de4c99cf'; // ID del elemento 'foco1'

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
