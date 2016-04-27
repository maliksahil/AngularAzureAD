import { Component } from "angular2/core";
import { AzureADAuthHelper } from "./AzureADAuthHelper.service";

@Component({
	selector: "login",
    templateUrl: "app/login.component.html",
	providers:[AzureADAuthHelper]
})

export class LoginComponent {
	constructor(private _azureADAuthHelper:AzureADAuthHelper) {
	}
	
	login() {
		this._azureADAuthHelper.login();
	}
}