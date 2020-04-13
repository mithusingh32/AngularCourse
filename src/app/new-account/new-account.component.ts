import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] // A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.
})
export class NewAccountComponent {

  // This creates and intiates the LoggingService for us
  // AccountService is passed down from the appComponent
  constructor(private loggingService: LoggingService, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe( (status: string) => alert("New Status: " + status)); // We subscribe to the emitted event. 
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountName, accountStatus)
  }
}
