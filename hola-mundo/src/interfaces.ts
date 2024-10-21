
// interfaces para las clases
interface Animal {
    name: string 
        // interfaz se utiliza para no compartir logia en los metodos
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal {
    name: string = 'Rocinante'

    caminar() {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'hin'
    }
}

class Cerdo implements Animal {
    name: string = 'Chanchito feliz'

    caminar() {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'oinc'
    }
}

class Perro implements Animal{
    name: string = 'Fido'
    caminar(): void {
        console.log('Perro caminando')
    }
    onomatopeya(): string {
        return 'guau'
    }
    
}

//INDEX SIGNATURE

class DiccionarioUsuarios {
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()
diccionarioUsuarios['1a'] = 'usuario 1'
diccionarioUsuarios['a1'] = 'usuario 2'

console.log(diccionarioUsuarios)