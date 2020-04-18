import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./users/user/user.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactive-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server-resolver.service";

// Setting up all the routes here
// Each route is a JSON that contains: path: the path to the page (localhost:4200/pathName), component: the component to be loaded
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [{ path: ':id/:name', component: UserComponent }] },  // path/:parameterName is how to pass parameter to a route 
  {
    path: 'servers', 
    // canActivate: [AuthGuardService],  // This will protect entire route
    canActivateChild: [AuthGuardService],  // This will only protect the children routes
    component: ServersComponent, 
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, // Setting the resolve field for each resolver we need
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }]
  }, // Children is to allow nested routing. So now when router-outlet is called in that page, it will load it right into that page instead of navigating away
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: "404: Page Not Found"} }, // This is static data
  { path: '**', redirectTo: '/not-found' }, // redirectTo is another option to use instead of component. // ** will catch will catch all inputs that havent been created above. IT SHOULD ALWAYS BE LAST
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes) // Configured app module to use out array
    RouterModule.forRoot(appRoutes, {useHash: true}) // the useHas will add # to the url. This is used for older browsers. // The web server will only care about everything before the #. Therefore it will run on servers that don't support returning index.html
  ],
  exports: [
    RouterModule // we export that configured module
  ]
})
export class AppRoutingModule {

}
