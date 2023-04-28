import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  result:string = '';

  resolveSum(total:number){
    this.result = total.toString();
  }
}
