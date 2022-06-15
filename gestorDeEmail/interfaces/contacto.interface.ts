import { Email } from "../src/email";

export interface Contacto{
    nombre: string;
    correo: string;
    BandejaEnviados: Email[];
    BandejaEntrada: Email[];
    buscarcorreo(texto: string);
    update(email: Email): void;
}