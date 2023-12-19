import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-one',
  templateUrl: './grafica-one.component.html',
  styles: ``
})
export class GraficaOneComponent {
  // Doughnut
  public labels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];

  public data: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [{ data: [350, 450, 100], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },],
  };

}
