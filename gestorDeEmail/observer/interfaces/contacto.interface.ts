import { Email } from "../src/email";

export interface Contacto{
    nombre: string;
    correo: string;
    buscarcorreoBandejaEntrada(texto: string);
    buscarcorreoBandejaEnviados(texto: string);
    update(email: Email): void;
}