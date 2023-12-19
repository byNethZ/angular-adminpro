import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: ``
})
export class IncrementerComponent implements OnInit {
  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number) {
    if (this.progress + value >= 0 && this.progress + value <= 100) {
      this.outputValue.emit(this.progress += value);
    }
  }

  onChangeValue(value: number) {
    this.progress = value;
    if (value >= 100) {
      this.progress = 100;
    }
    if (value <= 0 ) {
      this.progress = 0;
    }
    this.outputValue.emit(this.progress);
  }

}
