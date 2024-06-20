import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-pipes',
  templateUrl: './standard-pipes.component.html',
  styleUrls: ['./standard-pipes.component.scss']
})
export class StandardPipesComponent implements OnInit {


   text: string = 'Hello Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
