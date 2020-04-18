import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // console.log(this.server);
    // this.route.params.subscribe((param: Params) => this.server = this.serversService.getServer(+param['id'])) // putting that + infront of the param converts it into a number

    // We subscibe to the resolver's data that we're getting appRouting
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });


  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'merge'});
    //  How to handle query parameters in a router link. One of: //merge : Merge new with current parameters. //preserve : Preserve current parameters.


  }

}