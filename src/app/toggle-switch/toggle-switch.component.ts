import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  toggleSwitch(event: any) {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const status = checked ? 1 : 0;
      const id = '65e892c16124050600b87598'; // ID del elemento 'foco1'

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