import { Email } from "../src/email";

export interface Contacto{
    nombre: string;
    correo: string;
    BandejaEnviados: Email[];
    BandejaEntrada: Email[];
    update(email: Email): void;
}