import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.scss']
})
export class CurrencyPipeComponent implements OnInit {

  amount: number = 1234.563432;

  ratio: number = 0.1234;

  items: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  text: string = 'Hello Angular';


  constructor() { }

  ngOnInit(): void {
  }

}
