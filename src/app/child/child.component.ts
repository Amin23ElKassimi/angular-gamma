import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('master') user_name = '';


  constructor() { }

  ngOnInit(): void {

    console.log(this.user_name)

  }

}
