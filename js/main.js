class Personas {
  constructor(Nombre, Edad, Sexo){
    this.Nombre = Nombre ;
    this.Edad = Edad;
    this.Sexo = Sexo ;
  }


  saludar() {
    console.log(`Hola, mi nombre  es ${this.Nombre}, tengo ${this.Edad} años, y mi genero es... ${this.Sexo},`)
  }
}
class Estudiante extends Personas{
    constructor(Nombre, Edad, Sexo, Carrera){
        super(Nombre, Edad, Sexo);
        this.Carrera = Carrera;
    }
    estudiar(){
        console.log(`actualmente estoy estudiando ${this.Carrera}.`)
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

        
        persona1.saludar();
        Estudiante1.estudiar();

});
});


