import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonComponent, CalculatorComponent, CalculatorResultComponent, CalculatorFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
