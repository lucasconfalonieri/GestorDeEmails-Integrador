import { Email } from "../src/email";

export interface Contacto{
    update(email: Email): void;
}