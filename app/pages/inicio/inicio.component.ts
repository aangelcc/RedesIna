/**
 * Created by antonio on 14/01/17.
 */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";


@Component({
    selector: "inicio",
    templateUrl: "pages/inicio/inicio.component.html",
    styleUrls: ["pages/inicio/inicio-common.css"]
})
export class InicioComponent  implements OnInit{


    constructor(private router: Router, private page : Page){

    }

    consultar(){
        this.router.navigate(["/datos"]);
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
    }
}
