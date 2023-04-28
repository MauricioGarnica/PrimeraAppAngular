import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css'],
})
export class CalculatorFormComponent {
  @Output() resolveSum = new EventEmitter<number>();
  txtNumberA: number = 0;
  txtNumberB: number = 0;

  sumTwoNumbers(){
    this.resolveSum.emit(this.txtNumberA + this.txtNumberB);
  }
}
