class Animal {
  constructor(Nombre, Edad) {
      this.Nombre = Nombre;
      this.Edad = Edad;
  }

  HacerSonido() {
      console.log(`${this.Nombre} hace un sonido.`);
      alert(`${this.Nombre} hace un sonido.`);
  }
}

// Definición de la clase Perro que hereda de Animal
class Perro extends Animal {
  constructor(Nombre, Edad, Raza) {
      super(Nombre, Edad);
      this.Raza = Raza;
  }

  MoverCola() {
      console.log(`${this.Nombre} mueve la cola.`);
      alert(`${this.Nombre} mueve la cola.`);
  }
}

// Función para inicializar la página
function inicializar() {
  const animal1 = new Animal('animal1', 5);
  const perro1 = new Perro('Firulais', 3, 'Labrador');

  // Obtener elementos del DOM después de que se cargue el contenido
  const animalNameElem = document.getElementById('animalName');
  const animalAgeElem = document.getElementById('animalAge');
  const animalSoundBtn = document.getElementById('animalSoundBtn');

  const perroNameElem = document.getElementById('perroName');
  const perroAgeElem = document.getElementById('perroAge');
  const perroRazaElem = document.getElementById('perroRaza');
  const perroSoundBtn = document.getElementById('perroSoundBtn');
  const perroTailBtn = document.getElementById('perroTailBtn');

  // Mostrar información inicial
  animalNameElem.textContent = animal1.Nombre;
  animalAgeElem.textContent = `Edad: ${animal1.Edad} años`;

  perroNameElem.textContent = perro1.Nombre;
  perroAgeElem.textContent = `Edad: ${perro1.Edad} años`;
  perroRazaElem.textContent = `Raza: ${perro1.Raza}`;

  // Event listener para el botón de hacer sonido del animal
  animalSoundBtn.addEventListener('click', () => {
      animal1.HacerSonido();
  });

  // Event listener para el botón de hacer sonido y mover cola del perro
  perroSoundBtn.addEventListener('click', () => {
      perro1.HacerSonido();
  });

  perroTailBtn.addEventListener('click', () => {
      perro1.MoverCola();
  });
}

// Ejecutar la función de inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', inicializar);
