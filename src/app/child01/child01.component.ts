import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child01',
  templateUrl: '../child01/child01.component.html',
  styleUrls: ['./child01.component.scss']
})
export class Child01Component implements OnInit {

  @Input() userName: string = '';
  @Output() userNameChange: EventEmitter<string> = new EventEmitter<string>();

  onUserNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value)
    this.userNameChange.emit(inputElement.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
