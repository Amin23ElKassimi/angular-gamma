import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var-template',
  templateUrl: './var-template.component.html',
  styleUrls: ['./var-template.component.scss']
})
export class VarTemplateComponent implements OnInit {


  logValue(value: string) {
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
