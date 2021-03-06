import { Email } from "../singleton/email";

export interface Contacto{
    nombre: string;
    correo: string;
    buscarcorreoBandejaEntrada(texto: string): Email;
    buscarcorreoBandejaEnviados(texto: string): Email;
    update(email: Email): void;
}