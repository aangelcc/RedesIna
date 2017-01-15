/**
 * Created by antonio on 14/01/17.
 */

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Tiempo } from "./tiempo";
import { Configuracion } from "./configuracion";

// El injectable se necesita para que este servicio constituya una dependencia susceptible del sistema de
// inyeccion de dependencias de angularjs
// Este servicio obtiene los datos del backend, accesible en la IP 92.56.212.162 mediante protocolo http (puerto 80), ruta /tiempo
// Estos datos se obtiene del fichero configuracion

// Se devuelve el siguiente JSON: {"tiempo": x, "humedad": x}

@Injectable()
export class TiempoService {
    constructor(private http: Http) {}

    cargarDatos() : Observable<Tiempo>{
        let headers = new Headers();
        headers.append("Authorization", Configuracion.apiKey);

        return this.http.get(Configuracion.apiUrl, {
            headers: headers
        })
            .map(res => res.json())
            .map(data => {      //Arrow function de ES6
                return new Tiempo(data.temperatura, data.humedad);
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) { // Vaya! un error...
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}