import UsuarioNuevo from "./classUsuarioNuevo.js";
import { validarLargo, validarMail, validarContra, validarRepetirContra } from "./validacionSigin.js";

const formularioSignin = document.getElementById('registroForm');
const nombre = document.getElementById('nombre'),
      apellido = document.getElementById('apellido'),
      correo = document.getElementById('correo'),
      contrasena = document.getElementById('contrasena'),
      repetirContra = document.getElementById('repetirContrasena'),
      fechaNac = document.getElementById('fechaNac'),
      genero = document.getElementById('genero');
     
const usuariosNuevos = JSON.parse(localStorage.getItem('usuarioNuevoKey')) || [];
      
nombre.addEventListener('input', ()=>{validarLargo(nombre, 3, 35)});
apellido.addEventListener('input', ()=>{validarLargo(apellido, 3, 35)});
correo.addEventListener('input', ()=>{validarMail(correo)});
contrasena.addEventListener('input', ()=>{validarContra(contrasena)});
repetirContra.addEventListener('input', ()=>{validarRepetirContra(repetirContra)});
const crearContacto = (e) =>{
    e.preventDefault();            
    console.log(usuariosNuevos)
    const nuevoUsuario = new UsuarioNuevo(nombre.value, apellido.value, correo.value, contrasena.value, repetirContra.value, genero.value, fechaNac.value);
    usuariosNuevos.push(nuevoUsuario);
    console.log(usuariosNuevos);
    guardarLocalStorage();
    resetearForm();
}


const resetearForm = () =>{
    const inputs = document.getElementsByClassName('form-control');
    console.log(inputs)
    inputs.forEach(elemento => {
        elemento.classList.remove('is-valid');
    });

    formularioSignin.reset();
}

const guardarLocalStorage = ()=>{
    localStorage.setItem('usuarioNuevoKey', JSON.stringify(usuariosNuevos));
}
formularioSignin.addEventListener('submit', crearContacto);