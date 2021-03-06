import { Contacto } from "../interfaces/contacto.interface";
import { Email } from "../singleton/email";

export class ConcreteContacto implements Contacto{
    public nombre: string;
    public correo: string;
    public BandejaEnviados: Email[] = [];
    public BandejaEntrada: Email[] = [];
    
    constructor(contacto){
        this.nombre = contacto.nombre;
        this.correo = contacto.correo;
    }

    buscarcorreoBandejaEntrada(texto: string): Email{
        for (const i of this.BandejaEntrada){
            if(i.asunto === texto || i.contenido === texto){
                return i;
            }
        }
        const noencontrado = Email.getInstance("no encontrado", "no encontrado", new ConcreteContacto({nombre: "no encontrado", correo: "no encontrado"}));
        return noencontrado;
    }

    buscarcorreoBandejaEnviados(texto: string): Email{
        for (const i of this.BandejaEnviados){
            if(i.asunto === texto || i.contenido === texto){
                return i;
            }
        }
        const noencontrado = Email.getInstance("no encontrado", "no encontrado", new ConcreteContacto({nombre: "no encontrado", correo: "no encontrado"}));
        return noencontrado;
    }

    update(email: Email): void{
        if(email.remitente.nombre === this.nombre){
            this.BandejaEnviados.push(email);
        }else {
            this.BandejaEntrada.push(email);
        }
    }
}