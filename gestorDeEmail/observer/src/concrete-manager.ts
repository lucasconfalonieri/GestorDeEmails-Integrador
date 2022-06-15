import { Contacto } from "../interfaces/contacto.interface";
import { Manager } from "../interfaces/manager.interface";
import { Email } from "./email";

export class ConcreteManager implements Manager{
    public contactos: Contacto[] = [];
    public totalEmails: Email[] = [];

    public agregar(contacto: Contacto): boolean {
        const isExist = this.contactos.includes(contacto);
        if (isExist){
            return false;
        }
        this.contactos.push(contacto);
        return true;
    }

    public eliminar(contacto: Contacto): boolean {
        const contactoIndex = this.contactos.indexOf(contacto);
        if (contactoIndex === -1){
            return false;
        }
        this.contactos.splice(contactoIndex, 1);
        return true;
    }

    public eliminartodos(): boolean {
        this.contactos.splice(0, this.contactos.length);
        if(this.contactos.length === 0){
            return true
        }
        return false;
    }

    public crearcorreo(email: Email){
        this.totalEmails.push(email);
        this.notificar(email);
    }

    public notificar(email: Email){
        for(const contacto of this.contactos){
            contacto.update(email);
        }
        return true;
    }
}