import { Contacto } from "../interfaces/contacto.interface";
import { Email } from "./email";

export class ConcreteContacto implements Contacto{
    public nombre: string;
    public correo: string;
    private BandejaEnviados: Email[] = [];
    private BandejaEntrada: Email[] = [];
    constructor(contacto){
        this.nombre = contacto.nombre;
        this.correo = contacto.correo;
    }

    buscarcorreoBandejaEntrada(texto: string){
        for (const i of this.BandejaEntrada){
            if(i.asunto === texto || i.contenido === texto){
                return i;
            }
        }
        return false;
    }

    buscarcorreoBandejaEnviados(texto: string) {
        for (const i of this.BandejaEnviados){
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