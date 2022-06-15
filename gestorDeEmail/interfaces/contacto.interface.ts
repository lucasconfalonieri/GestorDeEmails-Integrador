import { Email } from "../src/email";

export interface Contacto{
    nombre: string;
    correo: string;
    BandejaEnviados: Email[];
    BandejaEntrada: Email[];
    buscarcorreoBandejaEntrada(texto: string);
    buscarcorreoBandejaEnviados(texto: string);
    update(email: Email): void;
}