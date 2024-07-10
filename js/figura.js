// Definición de la clase Figura
class Figura {
    constructor(color) {
        this.color = color;
        this.area = 0;
    }

    calcularArea() {
        return this.area;
    }
}

// Definición de la clase Circulo que hereda de Figura
class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    calcularArea() {
        this.area = Math.PI * this.radio * this.radio;
        return this.area;
    }
}

// Definición de la clase Rectangulo que hereda de Figura
class Rectangulo extends Figura {
    constructor(color, largo, ancho) {
        super(color);
        this.largo = largo;
        this.ancho = ancho;
    }

    calcularArea() {
        this.area = this.largo * this.ancho;
        return this.area;
    }
}

document.getElementById('circleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById('radius').value);
    const circulo1 = new Circulo('rojo', radius);
    const areaCirculo = circulo1.calcularArea();

    const circleResultElem = document.getElementById('circleResult');
    circleResultElem.textContent = `Área del círculo: ${areaCirculo.toFixed(2)} `;
});


document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const rectangulo1 = new Rectangulo('verde', length, width);
    const areaRectangulo = rectangulo1.calcularArea();

    const rectanguloResultElem = document.getElementById('rectangleResult');
    rectanguloResultElem.textContent = `Área del rectángulo: ${areaRectangulo.toFixed(2)}`;
});
