export default class UsuarioNuevo{
    #nombre;
    #apellido;
    #contrasena;
    #repetirContrasena;
    #id;
    #genero;
    #nacimiento;
    constructor(nombreParam, apellidoParam, contraParam, repetContraParam, generoParam, nacParam){
        this.#id = crypto.randomUUID();
        this.#nombre = nombreParam;
        this.#apellido = apellidoParam;
        this.#contrasena = contraParam;
        this.#repetirContrasena = repetContraParam;
        this.#genero = generoParam;
        this.#nacimiento = nacParam;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nombreString){
        if (typeof nombreString === "string" && nombreString !== null) {
            this.#nombre = nombreString;
        }
    }
    
    get apellido(){
        return this.#apellido;
    }
    set apellido(apellidoString){
        if (typeof apellidoString === "string" && apellidoString !== null) {
            this.#apellido = apellidoString;
        }
    }
    get contrasena(){
        return this.#contrasena;
    }
    set contrasena(contrasenaString){
        if (typeof contrasenaString === "string" && contrasenaString !== null) {
            this.#contrasena = contrasenaString;
        }
    }
    get repContra(){
        return this.#repetirContrasena;
    }
    set repContra(repContraString){
        if (typeof repContraString === "string" && repContraString !== null) {
            this.#repetirContrasena = repContraString;
        }
    }

    get genero(){
        return this.#genero;
    }
    set genero(generoString){
        if (typeof generoString === "string" && generoString !== null) {
            this.#genero = generoString;
        }
    }

    get nacimiento(){
        return this.#nacimiento;
    }
    set nacimiento(nacimientoInt){
        if (typeof nacimientoInt === "number" && !isNaN(nacimientoInt) && nacimientoInt !== null) {
            this.#nacimiento = nacimientoInt;
        }
    }

    toJSON() {
        return{
            id: this.#id,
            nombre: this.nombre,
            apellido: this.apellido,
            contrasena: this.contrasena,
            repContra: this.repContra,
            genero: this.genero,
            nacimiento: this.nacimiento
        };
    }
}