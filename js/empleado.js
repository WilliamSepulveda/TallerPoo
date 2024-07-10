class Empleado {
    static idCounter = 0;

    constructor(nombre, edad, sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.id = Empleado.generarIdEmpleado();
    }

    calcularSalarioAnual() {
        return this.sueldo * 12;
    }

    static generarIdEmpleado() {
        return ++Empleado.idCounter;
    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento) {
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }
    
    calcularSalarioAnual() {
        const sueldoConBono = this.sueldo * 1.10;
        return sueldoConBono * 12;
    }
}

function validarEmpleado(nombre, edad, sueldo) {
    if (nombre.trim() === "") {
        alert("El nombre no puede estar vacío.");
        return false;
    }
    if (edad <= 0) {
        alert("La edad debe ser un número positivo.");
        return false;
    }
    if (sueldo <= 0) {
        alert("El sueldo debe ser un número positivo.");
        return false;
    }
    return true;
}

function validarGerente(nombre, edad, sueldo, departamento) {
    if (!validarEmpleado(nombre, edad, sueldo)) {
        return false;
    }
    if (departamento.trim() === "") {
        alert("El departamento no puede estar vacío.");
        return false;
    }
    return true;
}

function crearEmpleado() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const sueldo = parseFloat(document.getElementById('sueldo').value);

    if (!validarEmpleado(nombre, edad, sueldo)) {
        return;
    }

    const empleado1 = new Empleado(nombre, edad, sueldo);
    const salarioAnual = empleado1.calcularSalarioAnual();

    document.getElementById('salario-anual-empleado').innerText = `Salario anual del empleado: ${salarioAnual} - ID: ${empleado1.id}`;
}

function crearGerente() {
    const nombre = document.getElementById('nombreGerente').value;
    const edad = parseInt(document.getElementById('edadGerente').value);
    const sueldo = parseFloat(document.getElementById('sueldoGerente').value);
    const departamento = document.getElementById('departamento').value;

    if (!validarGerente(nombre, edad, sueldo, departamento)) {
        return;
    }

    const gerente1 = new Gerente(nombre, edad, sueldo, departamento);
    const salarioAnual = gerente1.calcularSalarioAnual();

    document.getElementById('salario-anual-gerente').innerText = `Salario anual del gerente: ${salarioAnual} - Departamento: ${gerente1.departamento} - ID: ${gerente1.id}`;
}

// Mostrar ID generado en la consola
console.log(Empleado.generarIdEmpleado());
