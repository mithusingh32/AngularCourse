import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  intervalField(firedEvent: number)
  {
    console.log(firedEvent);
    if(firedEvent%2 == 0) this.evenNumbers.push(firedEvent);
    else this.oddNumbers.push(firedEvent);
  }
}
