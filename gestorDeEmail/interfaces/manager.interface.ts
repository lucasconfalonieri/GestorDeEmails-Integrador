import { Contacto } from "./contacto.interface";

export interface Manager{
    agregar(contacto: Contacto): void;
    eliminar(contacto: Contacto): void;
    notificar(): void;
}