import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "dd.html",
    styleUrls: ["app.css"]
})
export class DropDownComponent {
    public selectedIndex = 0;
    public selectedIndex1;
    public items: Array<string> = [];
    public items1: Array<string> = [];
    public ddHint;
    public ddHint1;

    constructor() {
        //setTimeout(() => {
            for (var i = 0; i < 5; i++) {
                this.items.push("data item " + i);
                this.items1.push("data 2nd item " + i);
            }
            //this.ddHint = "hint 1";
            //this.ddHint1 = "hint 2";
        //this.selectedIndex = 0
       // }, 5000);    
    }

    public onchange(selectedi){
        console.log("selected index " + selectedi);
    }
}
