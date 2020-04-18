import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  //ActivatedRoute can give us the current route we are on.
  // Provides access to information about a route associated with a component that is loaded in an outlet. Use to traverse the RouterState tree and extract information from nodes.
  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // navigate() doesnt know which route you're on, unlike the routerLink. routerLink always knows which component/component link youre in
    // relativeTo tells navigate() which route it is relative to. By default the path is the root domain (ie- localhost:4200)
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
