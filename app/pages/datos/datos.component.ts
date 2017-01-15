///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by antonio on 14/01/17.
 */
import {Component, OnInit} from "@angular/core";
import { Tiempo } from "../../shared/tiempo";
import { TiempoService} from "../../shared/tiempo.service";
import * as SocialShare from "nativescript-social-share";

// Como no hay two-way data binding sino solo del modelo a la vista, no es necesario importar el modlo oportuno

@Component({
    selector: "datos",
    templateUrl: "pages/datos/datos.component.html",
    styleUrls: ["pages/datos/datos-common.css"],
    providers: [TiempoService] // hay que registrar el servicio en el componente para que funcione la inyeccion de dependencias
})
export class DatosComponent implements OnInit{

    cargando: boolean = true;
    tiempo : Tiempo;

    constructor(private servicioTiempo : TiempoService){
        this.tiempo = new Tiempo(0,0);
    }

    actualizar(){
        this.cargando = true;
        this.servicioTiempo.cargarDatos().subscribe(resultado => {this.tiempo = resultado; this.cargando = false;});
    }

    compartir(){
        SocialShare.shareText("Datos meteorológicos by CasaAntonio App: \n" +
            "**********\n" +
            "Temperatura: "+this.tiempo.temperatura+" ºC\nHumedad "+this.tiempo.humedad);
    }

    ngOnInit(): void {
        this.actualizar();
    }
}