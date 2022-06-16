import { ConcreteContacto } from "./observer/src/concrete-contacto"
import { ConcreteManager } from "./observer/src/concrete-manager";
import { Email } from "./observer/singleton/email"

//#region Observer
test('1_Cuando_SeCreaUnContacto_Deberia_CrearseConNombreYCorreo', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    expect(contacto1.nombre).toEqual("Nicolas");
    expect(contacto1.correo).toEqual("nicolas@gmail.com");
})

test('2_Cuando_SeCreaUnEmail_Deberia_CrearseConAsuntoContenidoYRemitente', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const email = Email.getInstance("Trabajo", "123456789", contacto1); 
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
    manager.eliminartodos();
    expect(manager.contactos.length).toBe(0);
})

test('7_Cuando_CrearCorreo_Deberia_CrearUnEmailParaNotificarlo', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const email = Email.getInstance("Trabajo", "123456789", contacto1); 
    const manager = new ConcreteManager();
    manager.crearcorreo(email);
    expect(manager.totalEmails.length).toBe(1);
})

test('8_Cuando_Notificar_Deberia_NotificarALosContactosDelEmail', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const contacto2 = new ConcreteContacto({nombre: "Lucas", correo: "lucas@gmail.com"});
    const email = Email.getInstance("Trabajo", "123456789", contacto1); 
    const manager = new ConcreteManager();
    manager.agregar(contacto2);
    expect(manager.notificar(email)).toBeTruthy();
})

test('9_Cuando_BuscarCorreoBandejaEntrada_Deberia_DevolverElCorreoBuscado', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const contacto2 = new ConcreteContacto({nombre: "Lucas", correo: "lucas@gmail.com"});
    const email = Email.getInstance("Trabajo", "123456789", contacto1); 
    const manager = new ConcreteManager();
    manager.agregar(contacto2);
    manager.crearcorreo(email);
    expect(contacto2.buscarcorreoBandejaEntrada("Trabajo").remitente).toEqual(contacto1);
})

test('10_Cuando_BuscarCorreoBandejaEnviados_Deberia_DevolverElCorreoBuscado', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const contacto2 = new ConcreteContacto({nombre: "Lucas", correo: "lucas@gmail.com"});
    const email = Email.getInstance("Trabajo", "123456789", contacto1); 
    const manager = new ConcreteManager();
    manager.agregar(contacto2);
    manager.agregar(contacto1);
    manager.crearcorreo(email);
    expect(contacto1.buscarcorreoBandejaEnviados("Trabajo").remitente).toEqual(email.remitente);
})

test('11_Cuando_Update_Deberia_ActualizarACadaContactoDelEmail', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const contacto2 = new ConcreteContacto({nombre: "Lucas", correo: "lucas@gmail.com"});
    const email = Email.getInstance("Trabajo", "123456789", contacto1); 
    const manager = new ConcreteManager();
    manager.agregar(contacto2);
    manager.agregar(contacto1);
    manager.crearcorreo(email);
    expect(contacto1.BandejaEnviados.length).toBe(1);
    expect(contacto1.BandejaEntrada.length).toBe(0);
})

//#endregion

//#region Singleton
test('12_Cuando_EmailInstance_NoDeberia_SerNulo', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const email1 = Email.getInstance("Trabajo", "123456789", contacto1); 
    expect(email1 !== null).toBeTruthy();
})

test('13_Cuando_GetInstance_Deberian_LasVariablesDelObjetoSerIguales', () => {
    const contacto1 = new ConcreteContacto({nombre: "Nicolas", correo: "nicolas@gmail.com"});
    const email1 = Email.getInstance("Trabajo", "123456789", contacto1); 
    const email2 = Email.getInstance("Trabajo", "123456789", contacto1); 
    expect(email1 === email2).toBeTruthy();
})


//#endregion