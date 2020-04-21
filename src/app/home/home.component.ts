import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable, Observer } from 'rxjs'
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe((count: number) => {
    //   console.log(count);
    // })

    const customObvs = Observable.create((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {

        observer.next(count); // This emits a new value
        // observer.error() // Used to throw an error
        // observer.complete(); // When you're done

        if (count > 3) { // Throws an error
          observer.error("ERROR");
        }
        if (count > 2) {
          observer.complete();
        }
        ++count;
      }, 1000);
    }); // Creates a new observable. create takes in a funtion

  let pipe = customObvs.pipe(filter( (data:any) => {/*indicated of the data gets passed to the map funtion, therefore to the subsctribe function */ return data % 2 == 0} ),map( (data: number) => { return "Round " + data; } ));

    // We need to subscribe to the pipe call to get the changed data
    this.firstSub = pipe.subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => { console.log("Error: The second argument of subscribe allows us to handle alerts"); alert("Our Observable Threw an Error.") }, () => { console.log("COMPLETE: The third argument of subscribe handles the complete. You don't need unsubscribe on complete but its a good idea you should") });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.firstSub.unsubscribe();
  }
}
