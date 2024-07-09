class Personas {
  constructor(Nombre, Edad, Sexo){
    this.Nombre = Nombre ;
    this.Edad = Edad;
    this.Sexo = Sexo ;
  }
  saludar(esMayor) {
    console.log(`Hola, mi nombre es ${this.Nombre}, tengo ${this.Edad} años, y mi género es ${this.Sexo}. ¿soy mayor de edad? ${esMayor ? 'Sí' : 'No'}.`);
  }

  static esMayorDeEdad(Edad){
      return Edad >= 18;
  }
}
class Estudiante extends Personas{
    constructor(Nombre, Edad, Sexo, Carrera){
        super(Nombre, Edad, Sexo);
        this.Carrera = Carrera;
    }
    estudiar(){
        console.log(`  y bueno actualmente estoy estudiando ${this.Carrera}.`)
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('name').value;
        const edad = document.getElementById('age').value;
        const sexo = document.getElementById('gender').value;
        const carrera = document.getElementById('carrera').value; 

    
        const persona1 = new Personas(nombre, edad, sexo, );
        const Estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
        const esMayor = Personas.esMayorDeEdad(persona1.Edad);
        
        persona1.saludar(esMayor);
        Estudiante1.estudiar();
});
});


