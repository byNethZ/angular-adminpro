import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  progressOne: number = 20;
  progressTwo: number = 30;

  get getProgressOne() {
    return `${this.progressOne}%`;
  }

  get getProgressTwo() {
    return `${this.progressTwo}%`;
  }

}
