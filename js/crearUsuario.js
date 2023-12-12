import UsuarioNuevo from "./classUsuarioNuevo.js";

const formularioLogin = document.getElementById('registroForm');
const nombre = document.getElementById('nombre'),
      apellido = document.getElementById('apellido'),
      correo = document.getElementById('correo'),
      contrasena = document.getElementById('contrasena'),
      repetirContra = document.getElementById('repetirContrasena'),
      fechaNac = document.getElementById('fechaNac'),
      genero = document.getElementById('genero');
const usuariosNuevos = [];

const crearContacto = (e) =>{
    e.preventDefault();
    const nuevoUsuario = new UsuarioNuevo(nombre.value, apellido.value, contrasena.value, repetirContra.value, genero.value, fechaNac.value);
    usuariosNuevos.push(nuevoUsuario);
    console.log(usuariosNuevos);
    guardarLocalStorage();
    resetearForm();
}

const resetearForm = () =>{
    formularioLogin.reset();
}

const guardarLocalStorage = ()=>{
    localStorage.setItem('usuarioNuevoKey', JSON.stringify(usuariosNuevos));
}
formularioLogin.addEventListener('submit', crearContacto);