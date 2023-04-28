import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  disabled = false;
  mensaje: string = `No person has been added`;
  title: string = '';
  show: boolean = false;

  addPerson() {
    this.show = true;
    this.mensaje = 'Person added';
  }

  //Event Binding
  // modifyTitle(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value;
  // }
}
