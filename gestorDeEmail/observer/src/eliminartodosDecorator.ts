import { Contacto } from "../interfaces/contacto.interface";
import { ManagerDecorator } from "./managerDecorator"

export class eliminarTodosDecorator extends ManagerDecorator{
    public eliminartodos(): boolean {
        this.contactos.splice(0, this.contactos.length);
        if(this.contactos.length === 0){
            return true
        }
        return false;
    }
}