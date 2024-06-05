import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child01',
  template: `<button (click)="notifyParent()">Notifica il genitore</button>`,
  styleUrls: ['./child01.component.scss']
})
export class Child01Component implements OnInit {

  @Output() notify: EventEmitter<void> = new EventEmitter<void>();

  notifyParent() {
    this.notify.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
