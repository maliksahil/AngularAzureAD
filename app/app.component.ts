import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {LoginComponent} from './login.component';
import {FilesComponent} from './files.component';

@Component({
    selector: 'app',
    template:'<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/files', name: 'Files', component: FilesComponent },
    { path: '/login', name: 'Login', component: LoginComponent }    
])

export class AppComponent { 
    constructor(private _router:Router) {
        this._router.navigate(['/Files']);
    }
}