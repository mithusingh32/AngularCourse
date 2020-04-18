import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = { id: this.route.snapshot.params['id'], name: this.route.snapshot.params['name']};

    // Params is an observable here. Observables allows angular to work easily with async tasks
    // subscribe takes in a function to execute when data is updated.
    // In this case when params gets udpated, the function gets executed.
    // subscriptions will get cleaned up whenever the component is destroyed
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => { this.user.id = params['id'], this.user.name = params['name']}
      );
  }

  // Good practice to do this whenever you use custom observables
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
