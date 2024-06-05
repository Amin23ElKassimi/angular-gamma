import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent01',
  templateUrl: './parent01.component.html',
  styleUrls: ['./parent01.component.scss']
})
export class Parent01Component implements OnInit {

  name: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
