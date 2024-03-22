import { Component, OnInit } from '@angular/core';
import { SliderService } from '../slider.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderValue: number = 90; // Valor inicial del slider

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
  }

  onSliderChange(event: any) {
    this.sliderValue = event.target.value;
    this.updateServoPosition();
  }

  updateServoPosition() {
    this.sliderService.updateServoPosition(this.sliderValue)
      .subscribe(
        () => {
          console.log('Posición del servomotor actualizada correctamente');
        },
        error => {
          console.error('Error al actualizar la posición del servomotor:', error);
        }
      );
  }
}
