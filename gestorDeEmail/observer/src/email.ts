import { Contacto } from "../interfaces/contacto.interface";

export class Email{
    public asunto: string;
    public contenido: string;
    public remitente: Contacto;
    constructor(email){
        this.asunto = email.asunto;
        this.contenido = email.contenido;
        this.remitente = email.remitente;
    }
}