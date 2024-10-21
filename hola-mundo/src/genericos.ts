//GENERICOS EN FUNCIONES 
// los genericos se utlizan para eliminar el siguiente codigo 
/*
function log(a: string, b: string) {
    console.log(a, b)
}

function logN(a:string, b: string ) {
    console.log(a, b)
}

log('dato', 'chanchito feliz')
*/

// function log <T, V>(a: T, b:V): V {
//     console.log(a, b)

//     return b
// }

// log<string, number>('dato', 42)
// log<string, string>('dato', 'Chanchito Feliz')

// log(1, 2)
// log('saludo', 'Hola Mundo')

async function fetchData<T>(recurso:string): Promise<T>{
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string,
}

async function main(){
const user = await fetchData<User>('/usuarios')
}

type Computador ={
    encender: () => void,
    apagar: () => void
}
class Programador<T> {
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({encender: () => {}, apagar: () => {}})
const programador1 = new Programador<string>('Hola mundo')

//GENERICO EN INTERFACES
interface KeyValue<T, V> {
    key: T,
    value: V,
}

interface Product{
    id: string
}

function fetchProduct(): KeyValue<string, Product>{
    return{
        key:'id de producto',
        value: { id: 'id de producto' }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id de producto',
        value: 500
    }
}

//-------------------------------------------------------------------------------
// CONSTRAINTS --> RESTRICCIONES
// interface Usuario {
//     id:string,
//     name: string
// }

class Usuario {
    constructor(public id: string) {}
}
function print<T extends Usuario>(t:T): T {
    console.log(t);

    return t
}

print({id: 'user_id', name: 'Felipe'})

//----------------------------------------------
//GENERICOS Y HERENICA 
class Estado<T> {
    protected data:T[] = [];

    agregar(t:T): void {
        this.data.push(t)
    }

    getEstado() {
        return this.data
    }
}

type Objectid= {
    id:string
}
class EstadoEliminar<T extends Objectid> extends Estado<T>{ //Pasar generico
    eliminar(id: string) {
        this.data.filter(x => x.id !== id)
    }
}

// Pasar generico
// Con restricciones
class EstadoUsuarios extends Estado<Usuario>{
    reiniciarContrasenas() {
        // logica
    }
}
//fijo