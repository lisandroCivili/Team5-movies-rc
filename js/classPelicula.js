export default class Pelicula {
  #id;
  #nombre;
  #categoria;
  #descripcion;
  #url;

  constructor(nombre, categoria, descripcion, url) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#categoria = categoria;
    this.#descripcion = descripcion;
    this.#url = url;
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

  get url() {
    return this.#url;
  }

  set url(nuevaUrl) {
    this.#url = nuevaUrl;
  }

  toJSON() {
    return {
      nombre: this.nombre,
      categoria: this.categoria,
      id: this.id,
      descripcion: this.descripcion,
      url: this.url
    };
  }
}