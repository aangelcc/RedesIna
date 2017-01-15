/**
 * Created by antonio on 14/01/17.
 */
import { InicioComponent } from "./pages/inicio/inicio.component";
import {DatosComponent} from "./pages/datos/datos.component";

export const routes = [
    { path: "", component: InicioComponent },
    { path: "datos", component: DatosComponent }
];

export const navigatableComponents = [
    InicioComponent, DatosComponent
];