import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output("intervalEvent") intervalEmitter = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  startGame()
  {
    this.interval = setInterval(()=> {
      this.intervalEmitter.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  stopGame()
  {
    clearInterval(this.interval);
  }
}
