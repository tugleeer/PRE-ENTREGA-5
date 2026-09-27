class Persona {
    constructor(id, nombre, añoNacimiento, relacion) {
        this.id = id;
        this.nombre = nombre;
        this.añoNacimiento = añoNacimiento;
        this.relacion = relacion;
    }

    calcularEdad(añoActual) {
        return añoActual - this.añoNacimiento;
    }

    mostrarInformacion(añoActual) {
        const edad = this.calcularEdad(añoActual);
        return `${this.nombre} (${this.relacion}): aproximadamente ${edad} años.`;
    }
}

const añoActual = Number(prompt("¿En qué año estamos?"));
const nombreUsuario = prompt("¿Cuál es tu nombre?");

const personaUsuario = new Persona(1, nombreUsuario, 2000, "usuario");
const personaDos = new Persona(2, "Alex", 1998, "amigo/a");
const personaTres = new Persona(3, "Sam", 2005, "familiar");

const personas = [personaUsuario, personaDos, personaTres];

if (!isNaN(añoActual) && añoActual > 0 && nombreUsuario !== null && nombreUsuario.trim() !== "") {
    console.log(`Simulador de edades para ${nombreUsuario}:`);

    for (const persona of personas) {
        if (persona.añoNacimiento <= añoActual) {
            console.log(persona.mostrarInformacion(añoActual));
        } else {
            console.log(`${persona.nombre}: su año de nacimiento es posterior al año actual.`);
        }
    }

    alert(`Se cargaron ${personas.length} personas. Revisa la consola para ver sus edades.`);
} else {
    alert("Ingresaste un nombre o un año inválido.");
}