import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

// This give angular meta-data to inject the dependencies. This is needed when trying to using a service inside another service
  // we declare that this service should be created
  // by the root application injector.
@Injectable({providedIn: 'root',}) // post-Angular 6, you pass in the providedIn: 'root' to tell angular to make the service app-wide. 
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();  // Emitter for a status change. You can actually emit the change in other components since this service is app-wide and all children have access to this emitter. 

  constructor(private loggerService: LoggingService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggerService.logStatusChange(name, status);
  }

  updateStatus(id: number, status: string) {
    this.loggerService.logStatusChange(this.accounts[id].name, status);
    this.accounts[id].status = status;
  }
}
