class Propietario {
    constructor(nombrePro, direccion, telefono) {
        this.nombrePro = nombrePro;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this.nombrePro}. El domicilio es: ${this.direccion}. y el número telefónico de contacto: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombrePro, direccion, telefono, tipo) {
        super(nombrePro, direccion, telefono)
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    tipoA() {
        return (`El tipo de animal es un: ${this._tipo}`)
    };
}

class Mascota extends Animal {
    constructor(nombrePro, direccion, telefono, tipo, nombreMas, enfermedad) {
        super(nombrePro, direccion, telefono, tipo);
        this._nombreMas = nombreMas;
        this._enfermedad = enfermedad;
    }
    get nombreMas() {
        return this._nombreMas;
    }
    set nombreMas(animalnuevo) {
        this._nombreMas = animalnuevo;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedadnueva) {
        this._enfermedad = enfermedadnueva;
    }
    mascotas() {
        return (`mientras que el nombre de la mascota es: ${this._nombreMas} y la enfermedad es: ${this._enfermedad}`)
    };
}

let formulario = document.querySelector('form');
let agregar = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    switch (tipo) {
        case 'perro':
            let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            muestradata(perro);
            break;
        case 'gato':
            let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            muestradata(gato);
            break;
        case 'conejo':
            let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            muestradata(conejo);
            break;
        default:
            break;
    }

}
let muestradata = (parametro1) => {
    resultado.innerHTML = `<li> ${parametro1.datosPropietario()}</li> <li> ${parametro1.tipoA()}, ${parametro1.mascotas()}</li> `
}

formulario.addEventListener('submit', agregar);

// let mostrardata = (valor) => {
//     let resultado = document.querySelector('#resultado');
//     resultado.innerHTML = '';
//     let lista1 = document.createElement('li');
//     lista1.innerHTML = `${valor.datosPropietario()}`;
//     let lista2 = document.createElement('li');
//     lista2.innerHTML = `${valor.tipo}, Mientras que el nombre de la mascota es: ${valor.nombreMas} y la enfermedad es: ${valor.enfermedad}`;
//     resultado.appendChild(lista1);
//     resultado.appendChild(lista2);
// }