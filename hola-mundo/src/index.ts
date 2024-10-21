// let mensaje: String = "Hola Mundo"

// mensaje = "Chanchito feliz"

// mensaje = "chao mundo "

// console.log(mensaje)
// console.log(typeof [])

// //give the type 
// let extincionDinosaurios: number = 76_000_00    //i can give it the type 
// let dinosaurioFavorito = "T-rex"                // or if i initalice ts knows the type
// let extintos: boolean = true    

// function chanchitoFeliz (config:any){
//     return config
// }

// let animales: string[] = ['Chanchito', 'Feliz', 'Felipe']
// let nums: number[] = [1,2,3]
// let checks: boolean[] = []
// let nums2: Array<number> = [];

// //animales.map(x => x.) // el autocompletado sugiere metodos del tipo de dato

// //-----------------------------------------------------------------------------------------
// //TUPLA:
// //Una tupla es una variable que contiene un set de datos que se encuentran ordenados
// // Con dos o tres datos mas o menos  para buena practica
// let tupla: [number, string[]] = [1,['Chanchito feliz','Chanchito felipe']]

// //----------------------------------------------------------------------------------------
// //ENUM : tipo enumerado
// //ejemplo sin enums
// const chica = 's'
// const mediana = 'm'
// const grande = 'l'
// const extragrande = 'xl'

// //------------------------------------------------------------------------------------------
// // PascalCase
// //enum Talla{ Chica = 2, Mediana, Grande, ExtraGrande } manera de inicair y que los siguietnes valores sean 3, 4 ,5
// enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande= 'xl' } 
// const variable1 = Talla.Grande 
// console.log(variable1)

// //Para que sea codigo mas eficiente es necesario poner un const antes del enum
// const enum LoadingState {Idle, Loading, Success, Error}

// const estado = LoadingState.Success

// //--------------------------------------------------------------------------------------------
// //     OBJETOS
// /*
// const objeto: {
//     readonly id: number,
//     nombre: string,
//     talla: Talla,
// } = {id: 1, nombre: 'Hola Mundo', talla: Talla.Mediana}
// */
// type Direccion = {
//     numero: number,
//     calle: string,
//     pais: string
// }
// type Persona = {
//     readonly id: number,
//     nombre: string, 
//     talla: Talla,
//     direccion: Direccion
// }
// const objeto: Persona = {
//     id: 1,
//     nombre: 'Hola Mundo',
//     talla: Talla.Mediana,
//     direccion:{
//         numero: 1,
//         calle: 'Siempre viva',
//         pais:'Chanchitolandia'
//     } 
// }

// const arr: Persona[] = []

// const fn: (a: number) => string = (edad: number) => {
//     if (edad > 17)
//         return 'puedes ingresar'
//     return 'no puedes ingresar'
// }

// function validaEdad(edad: number, msg: string = 'Juanga feliz'): string {
//     if (edad > 17)
//         return `puedes ingresar ${msg}`

//     return 'no puedes pasar'
// }

// validaEdad(18, 'chanchito feliz')

// //----------------------------------------------------------------------------------
// // tipo NEVER en las funciones
// // Se utiliza cuando una funcion nunca va a alcanzar un punto en el que vaya
// // a retornar algo, se utilizan cuando van a lanzar excepciones las funciones

// function ErrorUsuario(): never{
//     throw new Error('error de usuario')
// }

// //----------------------------------------------------------------------------------
// // UNION TYPE:
// // Nos referimos a los union type es cuadno podemos utilizar mas de un solo tipo para 
// // poder referirnos a una variable

// let puntaje: number | string = 98

// puntaje = 'hola mundo'

// type Animal = {
//     id: number,
//     estado: string
// }
// type Usuario = {
//     id: number,
//     name: string
// }

// let animal: Usuario | Animal = {id:1, estado: "", name: ''}

// function sumaDos(n: number | string): number {
//     if (typeof n === 'number'){
//         return n + 2
//     }
//     return parseInt(n) + 2
// }

// sumaDos(2)
// //----------------------------------------------------------------------
// //INTERSECTION TYPE 
// // SIRVEN PARA TENER UN TIPO EN CONJUNTO CON OTRO TIPO Y JUNATRLOS
// // Y QUE EL OBJETO TENGA LAS PROPIEDADES DE AMBOS TIPOS

// type Audit = {
//     created_at: string,
//     modified_at: string,
// }

// type Product = {
//     name: string
// }

// const product: Audit & Product = {
//     created_at: '',
//     modified_at: '',
//     name: '',
// }

// //-----------------------------------------------------------------
// //LITERAL TYPE

// type Fibo = 0 | 1 | 2 | 3 | 5
// const nDeFibo: Fibo = 5


// //-----------------------------------------------------------------
// //NULLABLE TYPES

// function toNumber(s: string | null | undefined){
//     if (!s){
//         return 0
//     }
//     return parseInt(s)
// }

// const n = toNumber(null) 


// //-----------------------------------------------------------------
// //OPTIONAL CHAINING

// function getUser (id: number) {
//     if (id < 0) {
//         return null 
//     }
//     return {
//         id: 1,
//         name: 'Felipe',
//         created_at: new Date()
//     }
// }

// const user = getUser (1)
// // el valor de "?" pregunta si el valor de al lado existe y si existe ver si es un objeto
// // y de ser un objeto nos permitira entrar a la propiedad de created
// console.log('Usuario', user?.created_at)


// const arr1 = null 
// // el simbolo de "?" perimite saber si exsite es un tipo de validacion 
// // en este perimite saber si existe tal arreglo
// console.log(arr1?.[0])

// const fn5:any = null 

// //En el caso de esta funcion que se encuentre indefinida esto no se ejecutara
// console.log(fn5?.())

// //------------------------------------------------------------------------------------
// // NULLISH COALESCING OPERATOR
// // se utiliza cuando el valor de 0 o el valor de un string vacio es un valor 
// // util o representativo. 
// const difficulty: number | null = null

// const user2 = {
//     username: 'chanchito feliz',
//     //si es una linea vacia o 0 se utilizara 
//     // si fuera con || daria el valor de 1
//     difficulty: difficulty ?? 1,
// }

// console.log(user2)

// //--------------------------------------------------------------------------------------
// // TYPE ASSERTION
// // CUANDO tenemos algun valor optenido de algun lado, que nosotros sabemos 
// // con serteza el tipo de valor pero el sistema batalla
// // solo 100% seguro de saber

// const elem: any = null;

// const elem1 = elem as number


// // hago un request de un valor que se obtendra de un HTML
// // este le estoy asignando que sera eso para despues poder usar los metodos para
// // ese caso ya que si traigo un valor puede que no sepa bien que tipo de dato es

// //const input = document.getElementById('username') as HTMLInputElement
// const input = <HTMLInputElement> document.getElementById('username') 
// input.onchange


// //-------------------------------------------------------------------------------------
// // TYPE NARROWING
// // MAS DE UN TIPO DE DATO EN LA MISMA VARIABLE
// // llevar el valor para algun lugar

// function Lala (x: string | number) {
//     // type narrowing
//     if (typeof x === 'number') {
//         // x.   metodo que puede salir del tipo de dato "number"
//     }

//     if (typeof x === 'string') {
//         // x.   metodo de tipo string
//     }
// }

// //------------------------------------------------------------------------------------
// // TYPE UNKNOWN
// // Nos obligara a tener que manejar los posibles caminos para los parametros se usa 
// // en vez de "any"

// function procesa(algo: unknown) {
//     if ( typeof algo === 'string') {
//         return algo.toUpperCase()
//     }

//     if (typeof algo === 'number') {
//         return algo.toString()
//     }

// }

//---------------------------------------------------------------------------------
//CLASES
/*
class Personaje {
    readonly id: number //no se puede modificar la propiedad
    name: string
    nivel: number
    private _hp: number
    //simbolo ? para usarlo despues en un futuro
    profesion?: string
    constructor (id: number, name: string, nivel: number, hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this._hp = hp
    }

    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    cambiarHP(cantidad : number): number {
        this._hp = this._hp + cantidad
        // no pasarse del maximo
        return this._hp
    }
}

const personaje = new Personaje (1, 'Nicolas', 1, 100)
personaje.cambiarHP(-10)
console.log(personaje)


if (typeof personaje) {

}

if (personaje instanceof Personaje) {

}
*/
//-----------------------------------------------------------------------
// PROPIEDADES Y PARAMETROS 
// EL LO MISMO QUE LO DE ARRRIBA PERO ESCRITO DE MANERA MAS SIMPLE 

class Personaje {
    //simbolo ? para usarlo despues en un futuro
    profesion?: string
    private static equipo: number = 1
    constructor ( 
        public readonly id: number,
        public name: string, 
        public nivel: number, 
        private _hp: number 
    ){}
    

    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    static agregarPersonaje(): void {
        Personaje.equipo++
    }

    cambiarHP(cantidad : number): number {
        this._hp = this._hp + cantidad
        // no pasarse del maximo
        return this._hp
    }

    get hp(): number {
        return this._hp
    }

    set hp(cantidad: number ) {
        this._hp = this._hp + cantidad
    }

    static getEquipo(): number {
        return Personaje.equipo
    }
}

const personaje = new Personaje (1, 'Nicolas', 1, 100)
personaje.cambiarHP(-10)


const personaje1 = new Personaje(2, 'Chanchito', 1, 120)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())
