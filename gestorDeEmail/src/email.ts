import { Contacto } from "../interfaces/contacto.interface";

export class Email{
    public asunto: string;
    public contenido: string;
    public remitente: Contacto;
}