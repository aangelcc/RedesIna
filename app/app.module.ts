import { NgModule} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent, ...navigatableComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
        ],
})
export class AppModule { }
