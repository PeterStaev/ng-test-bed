// this import should be first in order to load some required settings (like globals and reflect-metadata)
import "reflect-metadata";
import {HTTP_PROVIDERS} from "@angular/http";
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

import {registerElement} from "nativescript-angular/element-registry";
registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

nativeScriptBootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);