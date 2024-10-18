"use strict";
let mensaje = "Hola Mundo";
mensaje = "Chanchito feliz";
mensaje = "chao mundo ";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 7600000;
let dinosaurioFavorito = "T-rex";
let extintos = true;
function chanchitoFeliz(config) {
    return config;
}
let animales = ['Chanchito', 'Feliz', 'Felipe'];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ['Chanchito feliz', 'Chanchito felipe']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chanchitolandia'
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return 'puedes ingresar';
    return 'no puedes ingresar';
};
function validaEdad(edad, msg = 'Juanga feliz') {
    if (edad > 17)
        return `puedes ingresar ${msg}`;
    return 'no puedes pasar';
}
validaEdad(18, 'chanchito feliz');
function ErrorUsuario() {
    throw new Error('error de usuario');
}
let puntaje = 98;
puntaje = 'hola mundo';
let animal = { id: 1, estado: "", name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos(2);
const product = {
    created_at: '',
    modified_at: '',
    name: '',
};
const nDeFibo = 5;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    };
}
const user = getUser(1);
console.log('Usuario', user === null || user === void 0 ? void 0 : user.created_at);
const arr1 = null;
arr1 === null || arr1 === void 0 ? void 0 : arr1[0];
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
//# sourceMappingURL=index.js.map