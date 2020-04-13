import { Component, OnInit } from '@angular/core';

import { AccountsService } from './shared/accounts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [AccountsService] // AccountService will be provided to all the children compnents
})

export class AppComponent implements OnInit{

  accounts: {name: string, status: string}[] = [];

  constructor(private accountServices: AccountsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.accounts = this.accountServices.accounts; // We're setting this component's array to the refrence of the service. This is like creating an array pointer and setting the pointer the refrence of another array in C++
  }
}
