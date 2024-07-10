class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar() {
        this.velocidad += 10;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }
    
    acelerar() {
        this.velocidad += 20;
    }
}

function crearVehiculo() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const velocidad = parseInt(document.getElementById('velocidad').value);

    let vehiculo1 = new Vehiculo(marca, modelo, velocidad);
    vehiculo1.acelerar();

    document.getElementById('Acelerar-vehiculo').innerText = `Velocidad actual del vehículo: ${vehiculo1.velocidad} km/h`;
}

function crearCoche() {
    const marca = document.getElementById('marcaCoche').value;
    const modelo = document.getElementById('modeloCoche').value;
    const velocidad = parseInt(document.getElementById('velocidadCoche').value);
    const combustible = document.getElementById('combustible').value;

    let coche1 = new Coche(marca, modelo, velocidad, combustible);
    coche1.acelerar();

    document.getElementById('velocidad-coche').innerText = `Velocidad actual del coche: ${coche1.velocidad} km/h - Combustible: ${coche1.combustible}`;
}
