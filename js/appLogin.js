const validar = {
  // permite mayusculas, minusculas y guiones medio e inferior
	usuario: {
    exprecion:/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ]{6,20}$/,
    error:'usuario no valido, minimo de caracteres 6 y maximo 20',
    requerido: true
  },   
	password:{
    exprecion: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~])(?!.*\s).{8,20}$/,
    error:'al menos 1 mayuscula,1 numero,1 carter especial y min 8 max 20 caracteres',
    requerido:true
  },  
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  loadleyendaError: function (input){    
    const div = document.createElement('div');
    div.classList.add( 'invalid-feedback');
    console.log(this[input.name].error);
    div.textContent = this[input.name].error;
    input.insertAdjacentElement('afterend',div)
  },
  comprobarForm: function (form){
    let inputs = form.querySelectorAll('input:not([type="checkbox"])');
    return Array.from(inputs).every(input =>{
      if (validar[input.name].requerido){
        return input.classList.contains('is-valid');
      }else{
        return input.value ? input.classList.contains('is-valid'): true;
      }
    });
  }
};

let validarForm = (e)=>{
  let tipo = e.target.name
  let input = e.target;
  let form = input.form;
  if (input.value){
    if(!validar[tipo].exprecion.test(input.value)){
      input.classList.add('is-invalid')
      input.classList.remove('is-valid')
    }else{
      input.classList.remove('is-invalid')
      input.classList.add('is-valid')
    }
  }
  const boton = form.querySelector('button[type="submit"]');
  if (validar.comprobarForm(form)){
    boton.disabled=false;
  }else{
    boton.disabled=true;
  };

  
}

const formLogin = document.forms.frmLogin;
const inputsLogin = formLogin.querySelectorAll('input:not([type="checkbox"])');

inputsLogin.forEach(input =>{
  validar.loadleyendaError(input);
  input.addEventListener('keyup',validarForm);
  input.addEventListener('blur',validarForm);
})

formLogin.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('usuarioNuevoKey')));
  
  
});
