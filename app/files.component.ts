import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AuthenticatedHttpService } from './authenticatedHttp.service';
import { AzureADAuthHelper } from "./AzureADAuthHelper.service"

@Component({
    selector: "files",
    templateUrl: "app/files.component.html",
    providers: [HTTP_PROVIDERS, AuthenticatedHttpService, AzureADAuthHelper]
})

export class FilesComponent {
    private files = [];
    constructor(private _http: AuthenticatedHttpService, private _authHelper: AzureADAuthHelper) { }

    getFiles() {
        this._http.get("https://graph.microsoft.com/v1.0/me/drive/root/children").then((files) => { 
            this.files = files.value; 
        })
        // .subscribe(res => {
        //     if (res.status === 200)
        //         this.files = res.json().value;
        //     else
        //         alert("An error occurred calling the Microsoft Graph: " + res.status);
        // });
        // this._http.get("data/data.json").subscribe(res => {
        //     console.log(res.json());
        // });
    }
}