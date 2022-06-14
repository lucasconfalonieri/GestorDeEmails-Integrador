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
    update(email: Email): void {
        
    }
}