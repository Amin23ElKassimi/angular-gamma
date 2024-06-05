import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent01',
  template: `
    <app-child (notify)="onNotify()"></app-child>
    <p>{{ message }}</p>`,
  styleUrls: ['./parent01.component.scss']
})
export class Parent01Component implements OnInit {

  message: string = '';

  onNotify() {
    this.message = 'Evento ricevuto dal componente figlio!';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
