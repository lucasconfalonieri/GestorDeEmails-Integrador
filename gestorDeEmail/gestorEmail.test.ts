import { ConcreteContacto } from "./observer/src/concrete-contacto"
import { ConcreteManager } from "./observer/src/concrete-manager";
import { Email } from "./observer/src/email"

test('1_Cuando_SeCreaUnContacto_Deberia_CrearseConNombreYCorreo', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    expect(contacto1.nombre).toEqual("Nicolas");
    expect(contacto1.correo).toEqual("nicolas@gmail.com");
})

test('2_Cuando_SeCreaUnEmail_Deberia_CrearseConAsuntoContenidoYRemitente', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const email = new Email({asunto: "Trabajo", contenido: "123456789", remitente: contacto1});
    expect(email.asunto).toEqual("Trabajo");
    expect(email.contenido).toEqual("123456789");
    expect(email.remitente.nombre).toBe("Nicolas");
})

test('3_Cuando_SeCreaUnManager_Deberia_CrearseConUnaListaDondeSeAgregaraContactos', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const manager = new ConcreteManager();
    manager.agregar(contacto1);
    expect(manager.contactos[0].nombre).toBe("Nicolas")
})

test('4_Cuando_Agregar_Deberia_AgregarUnContactoALaLista', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const manager = new ConcreteManager();
    expect(manager.agregar(contacto1)).toBeTruthy();
})

test('5_Cuando_Eliminar_Deberia_EliminarUnContactoSeleccionadoDeLaLista', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const manager = new ConcreteManager();
    manager.agregar(contacto1);
    expect(manager.eliminar(contacto1)).toBeTruthy();
})

test('6_Cuando_EliminarTodos_Deberia_EliminarTodosLosContactosDeLaLista', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const contacto2 = new ConcreteContacto({nombre: "Lucas", correo: "lucas@gmail.com"});
    const manager = new ConcreteManager();
    manager.agregar(contacto1);
    manager.agregar(contacto2);
    expect(manager.contactos.length).toBe(2);
    manager.eliminartodos()
    expect(manager.contactos.length).toBe(0);
})

test('7_Cuando_CrearCorreo_Deberia_CrearUnEmailParaNotificarlo', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const email = new Email({asunto: "Trabajo", contenido: "123456789", remitente: contacto1});
    const manager = new ConcreteManager();
    manager.crearcorreo(email);
    expect(manager.totalEmails.length).toBe(1);
})

test('8_Cuando_Notificar_Deberia_NotificarALosContactosDelEmail', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const contacto2 = new ConcreteContacto({nombre: "Lucas", correo: "lucas@gmail.com"});
    const email = new Email({asunto: "Trabajo", contenido: "123456789", remitente: contacto1});
    const manager = new ConcreteManager();
    manager.agregar(contacto2);
    expect(manager.notificar(email)).toBeTruthy();
})