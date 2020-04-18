import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { ServersService } from "./servers.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
interface Server {
    id: number; name: string; status: string;
}

@Injectable({providedIn: 'root'})
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}