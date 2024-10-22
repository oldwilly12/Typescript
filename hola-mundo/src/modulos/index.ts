import { Point, PUNTITO } from './Point' 
import * as G from './Group'
import { Caballos, Animales, Chanchitos } from './Animales'

console.log( Animales, Chanchitos, Caballos )
const point = new Point(1, 2)

const group = new G.default(1, 'chanchito feliz')

console.log(PUNTITO);

console.log(G.defaulGroup.admin)