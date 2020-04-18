import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanComponenetDeactivate } from './can-deactive-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponenetDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => { this.allowEdit = queryParams['allowEdit'] === '1' ? true : false; console.log(queryParams['allowEdit']) });
    // this.route.fragment.subscribe((fragmentParams: Params) =>{ this.allowEdit = fragmentParams['allowEdit']});
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.route.params.subscribe((param: Params) => this.server = this.serversService.getServer(+param['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm("Do you want to discard changes?");
    }  
    else {
      return true;
    }
  }

}
