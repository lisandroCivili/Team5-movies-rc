const validar = {
  // permite mayusculas, minusculas y guiones medio e inferior
	usuario: {
    exprecion:/^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ]{5,20}$/,
    error:'usuario no valido, minimo de caracteres 6 y maximo 20',
    requerido: true
  },   
	password:{
    exprecion: /^(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,20}$/,
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
  },
  borrarForm: function(form){
    form.reset();
    let inputs = form.querySelectorAll('input:not([type="checkbox"])');
    inputs.forEach(input =>{
      input.classList.remove('is-valid');
    })
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
  const usuarios = JSON.parse(localStorage.getItem('usuarioNuevoKey'));
  console.log(usuarios);
  console.log(formLogin.password.value);
  const encontrado = usuarios.find(usuario => usuario.contrasena === formLogin.password.value && usuario.usuario===formLogin.usuario.value);
  const usuarioAdmin = usuarios.find(usuario => usuario.contrasena === "Adminrolling23" && usuario.usuario==="admin23");
 
 
  if (encontrado) {
    console.log('Objeto encontrado:', encontrado.nombre);
    validar.borrarForm(formLogin); 
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Bienvenido ${encontrado.nombre}`,
      showConfirmButton: false,
      timer: 2500
    });
    if (usuarioAdmin) {
    
      const navbar = document.getElementById("opcionesMenu");
      const opcionLi = document.createElement("li");
      opcionLi.classList.add("nav-item");
      const opcionA = document.createElement("a");
      opcionA.classList.add("nav-link", "p-2",  "my-1", "fw-medium", "opcionesNav");
      opcionA.href = "./pages/webAdministracion.html";
      opcionA.innerHTML = "Admin";
      opcionLi.appendChild(opcionA);
      navbar.appendChild(opcionLi);
      console.log("viejooo")
  
    }
  } else {
    console.log('No se encontró el objeto');
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: `Usuario y/o password incorrecto`,
      showConfirmButton: false,
      timer: 2500
    });
  }
  
  
});
