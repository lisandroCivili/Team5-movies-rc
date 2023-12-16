export default class Pelicula {
  #id;
  #nombre;
  #categoria;
  #descripcion;

  constructor(nombre, categoria, descripcion) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#categoria = categoria;
    this.#descripcion = descripcion;
  }

  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(nuevaCategoria) {
    this.#categoria = nuevaCategoria;
  }

  get descripcion() {
    return this.#descripcion;
  }

  set descripcion(nuevaDescripcion) {
    this.#descripcion = nuevaDescripcion;
  }

  toJSON() {
    return {
      nombre: this.nombre,
      categoria: this.categoria,
      id: this.id,
      descripcion: this.descripcion,
    };
  }
}