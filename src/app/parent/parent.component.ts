import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  classArray: string[] = ['class1', 'class2', 'class3', 'class4'];
  currentClass: string = '';
  
  // Data to child
  
  name_user: string ="Alessio";

  // Data from child

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
