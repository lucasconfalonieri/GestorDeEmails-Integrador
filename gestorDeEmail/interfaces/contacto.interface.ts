import {Manager} from "./manager.interface";

export interface Contacto{
    nombre: string;
    correo: string;
    update(manager: Manager): void;
}