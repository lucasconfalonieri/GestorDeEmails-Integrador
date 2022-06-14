import { Contacto } from "../interfaces/contacto.interface";
import { Manager } from "../interfaces/manager.interface";
import { Email } from "./email";

export class ConcreteManager implements Manager{
    public email: Email;
    public contactos: Contacto[] = [];
    

    public agregar(contacto: Contacto): boolean {
        const isExist = this.contactos.includes(contacto);
        if (isExist){
            return true;
        }
        return false;
    }

    public eliminar(contacto: Contacto): boolean {
        const contactoIndex = this.contactos.indexOf(contacto);
        if (contactoIndex === -1){
            return false;
        }
        this.contactos.splice(contactoIndex, 1);
        return true;
    }

    public eliminartodos(contacto: Contacto): boolean {
        this.contactos.splice(0, this.contactos.length);
        if(this.contactos.length === 0){
            return true
        }
        return false;
    }


    public notificar(email: Email): void {
        for(const contacto of this.contactos){
            contacto.update(email);
        }
    }

}