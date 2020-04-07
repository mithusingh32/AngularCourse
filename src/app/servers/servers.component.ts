import { Component, OnInit } from '@angular/core';

// IDs are not supported as selectors in angular
@Component({
    // selector: '[app-servers]', // Property selecctor
    // selector: '.app-servers',  // Class selector
    selector: 'app-servers',      // Custom element selector
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus: string = "No Server Created";
    serverName = "";
    serverCreated = false;
    servers = ['TestServer1', 'TestServer2', 'TestServer3'];

    // Ex2 variables
    userName: string;
    inputUserName: string; 
    hideParagraph = true;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = "Server " + this.serverName + " was created";
        this.servers.push(this.serverName);
        this.serverCreated = true;
    }

    onUpdateServerName(event: Event) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value; // Need to cast it so Typescript knows what we're trying to get. Event itself doesnt have a value, so casting it to <HTMLInputElement> gives it that knowledge  
    }
/*Exercise 2*/
    onInput(event: Event)
    {
        this.userName = (<HTMLInputElement>event.target).value
    }

    isInputEmpty()
    {
        return (this.userName == "" || this.userName == null);
    }

    onClicked()
    {
        this.hideParagraph = false; 
        this.inputUserName = this.userName;
        this.userName = "";
    }
    /* End Exercise 2 */
}
