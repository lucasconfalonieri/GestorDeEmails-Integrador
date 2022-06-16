import { Email } from "../singleton/email";
import { Contacto } from "./contacto.interface";

export interface Manager{
    contactos: Contacto[];
    agregar(contacto: Contacto): boolean;
    eliminar(contacto: Contacto): boolean;
    notificar(email: Email);
}