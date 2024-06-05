import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

   // Data from parent

  @Input('master') user_name = '';

  // Data to parent

  @Output() newItemEvent = new EventEmitter<string>();

  input_data: string = '';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {

    console.log(this.user_name)

  }

}
