import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
  @Input() title: string = 'Untitled';
  // Doughnut

  @Input('data') doughnutChartData: ChartData<'doughnut'> ={
    labels: [],
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';

}
