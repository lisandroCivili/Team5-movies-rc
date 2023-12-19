import UsuarioNuevo from "./classUsuarioNuevo.js";
import { validarLargo, validarMail, validarContra, validarRepetirContra} from "./validacionSigin.js";

const formularioSignin = document.getElementById('registroForm');
const nombre = document.getElementById('nombre'),
      apellido = document.getElementById('apellido'),
      usuario = document.getElementById('usuario'),
      correo = document.getElementById('correo'),
      contrasena = document.getElementById('contrasena'),
      repetirContra = document.getElementById('repetirContrasena'),
      fechaNac = document.getElementById('fechaNac'),
      genero = document.getElementById('genero');
     
const usuariosNuevos = JSON.parse(localStorage.getItem('usuarioNuevoKey')) || [];
      
nombre.addEventListener('input', ()=>{validarLargo(nombre, 3, 35)});
apellido.addEventListener('input', ()=>{validarLargo(apellido, 3, 35)});
usuario.addEventListener('input', ()=>{validarLargo(usuario, 5, 10)});
correo.addEventListener('input', ()=>{validarMail(correo)});
contrasena.addEventListener('input', ()=>{validarContra(contrasena)});
repetirContra.addEventListener('input', ()=>{validarRepetirContra(repetirContra)});

const crearContacto = (e) =>{
    e.preventDefault();            
    console.log(usuariosNuevos)
    if (validarLargo(nombre, 3, 35) &&
    validarLargo(apellido, 3, 35) &&
    validarMail(correo) &&
    validarContra(contrasena) &&
    validarRepetirContra(repetirContra)) {
        
        const nuevoUsuario = new UsuarioNuevo(nombre.value, apellido.value, usuario.value, correo.value, contrasena.value, repetirContra.value, genero.value, cambiarFormatoFecha(fechaNac.value));
        usuariosNuevos.push(nuevoUsuario);
        console.log(usuariosNuevos);
        guardarLocalStorage();
        resetearForm();
    }
}

function cambiarFormatoFecha(fecha) {
    const fechaObj = new Date(fecha);
    const year = fechaObj.getFullYear();
    const month = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const day = String(fechaObj.getDate()).padStart(2, '0');
    const fechaCompleta = `${year}-${month}-${day}`
    return fechaCompleta;
  }

const resetearForm = () =>{
    var inputs = document.querySelectorAll('#registroForm input, #registroForm select');
    inputs.forEach(function(input) {
        input.classList.remove('is-valid');
      });
    formularioSignin.reset();
}

const guardarLocalStorage = ()=>{   
    localStorage.setItem('usuarioNuevoKey', JSON.stringify(usuariosNuevos));    
}
formularioSignin.addEventListener('submit', crearContacto);