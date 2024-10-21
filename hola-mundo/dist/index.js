"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 1;
const personaje = new Personaje(1, 'Nicolas', 1, 100);
personaje.cambiarHP(-10);
const personaje1 = new Personaje(2, 'Chanchito', 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map