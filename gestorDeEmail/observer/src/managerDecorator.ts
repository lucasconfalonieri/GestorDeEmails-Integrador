import { Contacto } from "../interfaces/contacto.interface";
import { Manager } from "../interfaces/manager.interface";
import { Email } from "../singleton/email";

export abstract class ManagerDecorator implements Manager{
    protected manager: Manager;
    public contactos: Contacto[] = [];

    constructor(manager: Manager){
        this.manager = manager;
    }

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

    public notificar(email: Email){
        for(const contacto of this.contactos){
            contacto.update(email);
        }
        return true;
    }
}