import { Contacto } from "../interfaces/contacto.interface";

export class Email{
    public asunto: string;
    public contenido: string;
    public remitente: Contacto;
    private static instance: Email;

    private constructor(email){
        this.asunto = email.asunto;
        this.contenido = email.contenido;
        this.remitente = email.remitente;
    }

    public static getInstance(asunt: string, contenid: string, remitent: Contacto){
        if(!Email.instance){
            Email.instance = new Email({asunto: asunt, contenido: contenid, remitente: remitent})
        }
        return Email.instance;
    }
}