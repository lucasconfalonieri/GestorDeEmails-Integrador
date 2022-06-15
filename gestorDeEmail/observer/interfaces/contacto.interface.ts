import { Email } from "../src/email";

export interface Contacto{
    nombre: string;
    correo: string;
    buscarcorreoBandejaEntrada(texto: string): Email;
    buscarcorreoBandejaEnviados(texto: string): Email;
    update(email: Email): void;
}