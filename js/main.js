class Personas {
  constructor(Nombre, Edad, Sexo){
    this.Nombre = Nombre ;
    this.Edad = Edad;
    this.Sexo = Sexo ;
  }


  saludar() {
    console.log(`Hola, mi nombre  es ${this.Nombre}.`)
  }
}
document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('name').value;
        const edad = document.getElementById('age').value;
        const sexo = document.getElementById('gender').value;

        const persona1 = new Personas(nombre, edad, sexo );

        persona1.saludar();

});
});