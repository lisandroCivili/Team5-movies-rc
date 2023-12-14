const criteriosValue = {
  // permite mayusculas, minusculas y guiones medio e inferior
	usuario: {
    exprecion:/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ]{6,20}$/,
    error:'usuario no valido, minimo de caracteres 6 y maximo 20'
  },   
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~])(?!.*\s).{8,20}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};
const formulario = document.forms.frmLogin;
const inputs = document.querySelectorAll('#frmLogin input');
console.log(inputs);
let validarForm = (e)=>{
 let tipo= e.target.name
  console.log(criteriosValue[tipo].exprecion.test(e.target.value))
}

inputs.forEach(input =>{

  input.addEventListener('keyup',validarForm);
  input.addEventListener('blur',validarForm);
})
formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
});
