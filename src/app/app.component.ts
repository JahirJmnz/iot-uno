import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  chart: any;

  constructor() {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Temperature',
            data: [22, 23, 24, 25, 26],
            borderColor: 'red',
            fill: false
          },
          {
            label: 'Humidity',
            data: [50, 55, 60, 65, 70],
            borderColor: 'blue',
            fill: false
          }
        ]
      }
    });
  }
}
