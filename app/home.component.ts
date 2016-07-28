import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "home.html",
    styleUrls: ["app.css"]
})
export class HomeComponent {
    constructor(private _router: Router) {
    }

    public goToDropDown() {
        this._router.navigate(["/dd"]);
    }
}
