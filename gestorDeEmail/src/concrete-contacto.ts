import { Contacto } from "../interfaces/contacto.interface";
import { Email } from "./email";

export class ConcreteContacto implements Contacto{
    public nombre: string;
    public correo: string;
    public BandejaEnviados: Email[] = [];
    public BandejaEntrada: Email[] = [];
    constructor(contacto){
        this.nombre = contacto.nombre;
        this.correo = contacto.correo;
    }

    buscarcorreo(texto: string){
        for (const i of this.BandejaEntrada){
            if(i.asunto === texto || i.contenido === texto){
                return i;
            }
        }
        return false;
    }

    update(email: Email): void {
        if(email.remitente.nombre === this.nombre){
            this.BandejaEnviados.push(email);
        }else {
            this.BandejaEntrada.push(email);
        }
    }
}