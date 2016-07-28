import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomeComponent} from "./home.component";
import {DropDownComponent} from "./dd.component";

export const routes: RouterConfig = [
  { path: "", component: HomeComponent },
  { path:"dd", component: DropDownComponent}
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];