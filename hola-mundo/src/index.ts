let mensaje: String = "Hola Mundo"

mensaje = "Chanchito feliz"

mensaje = "chao mundo "

console.log(mensaje)
console.log(typeof [])

//give the type 
let extincionDinosaurios: number = 76_000_00    //i can give it the type 
let dinosaurioFavorito = "T-rex"                // or if i initalice ts knows the type
let extintos: boolean = true    

function chanchitoFeliz (config:any){
    return config
}

let animales: string[] = ['Chanchito', 'Feliz', 'Felipe']
let nums: number[] = [1,2,3]
let checks: boolean[] = []
let nums2: Array<number> = [];

//animales.map(x => x.) // el autocompletado sugiere metodos del tipo de dato

//TUPLA:
//Una tupla es una variable que contiene un set de datos que se encuentran ordenados
// Con dos o tres datos mas o menos  para buena practica
let tupla: [number, string[]] = [1,['Chanchito feliz','Chanchito felipe']]

//ENUM : tipo enumerado
//ejemplo sin enums
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
//enum Talla{ Chica = 2, Mediana, Grande, ExtraGrande } manera de inicair y que los siguietnes valores sean 3, 4 ,5
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande= 'xl' } 
const variable1 = Talla.Grande 
console.log(variable1)

//Para que sea codigo mas eficiente es necesario poner un const antes del enum
const enum LoadingState {Idle, Loading, Success, Error}

const estado = LoadingState.Success

//     OBJETOS
/*
const objeto: {
    readonly id: number,
    nombre: string,
    talla: Talla,
} = {id: 1, nombre: 'Hola Mundo', talla: Talla.Mediana}
*/
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}
type Persona = {
    readonly id: number,
    nombre: string, 
    talla: Talla,
    direccion: Direccion
}
const objeto: Persona = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion:{
        numero: 1,
        calle: 'Siempre viva',
        pais:'Chanchitolandia'
    } 
}

const arr: Persona[] = []