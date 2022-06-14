import { Email } from "../src/email";
import { Contacto } from "./contacto.interface";

export interface Manager{
    agregar(contacto: Contacto): boolean;
    eliminar(contacto: Contacto): boolean;
    notificar(email: Email): void;
}