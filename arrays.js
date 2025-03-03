//FUNCION
function cpArray(array){
    let cpArray = []
    cpArray[0] = array.pop()
    cpArray[1] = array.pop()
    cpArray[2] = array.pop()
    cpArray[3] = array.pop()
    cpArray[4] = array.pop()
    cpArray[5] = array.pop()
    cpArray[6] = array.pop()
    cpArray[7] = array.pop()
    return cpArray
}

//creamos el arreglo vacio
let peliculas = []
//le insertamos las 7 peliculas y juegos
peliculas.push("Como entrenar a mi dragon", 
                "maze runner", 
                "mario pelicula", 
                "assasins creed",
                "Son como ninos",
                "rocket league",
                "halo")

//agregamos pelicula al inicio
peliculas.unshift("luna de miel en familia")
let cpPeliculas = cpArray(peliculas)
//imprimimos el arreglo 
console.log("original")
console.log(peliculas)
console.log("copia")
console.log(cpPeliculas)

//-----------------------------------METODOS NUEVOS-------------------------
console.log("\n----------------------METODOS NUEVOS-------------------------")
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

console.log("arr 1 concatenado con arr2")
let arr3 = arr1.concat(arr2)
console.log(arr3)

console.log("arr 2 copiado en arr 4")
let arr4 = arr2.slice(0,4)
console.log(arr4)

console.log("arr splice")
let arr5 = arr4.splice(1,1,7,8)
console.log(arr5)

//CICLO FOR EACH
arr3.forEach(function(i,pos){
    console.log("Elemento = " + i + "Posicion[" + pos + "]")
})

//-----------------------------------EJERCICIO 2 -------------------------------
console.log("\n----------------------EJERCICIO 2-------------------------------")

//IMPRIME SOLO LA PELI, SE LE PASA SOLO EL ELEMENTO
console.log("------------------------------------------------------")
cpPeliculas.forEach(function(i,){
    console.log("Pelicula = " + i)
})
console.log("------------------------------------------------------")
//IMPRIME NOMBRE DE LA PELI Y EL ELEMENTO 
cpPeliculas.forEach(function(i,pos){
    console.log("Pelicula ["+ pos +"] = " + i)
})

//-----------------------------METODOS DE BUSQUEDA----------------------------------
console.log("\n----------------------METODOS DE BUSQUEDA-------------------------")
let indice = cpPeliculas.indexOf("luna de miel en familia")
console.log(`indice de luna de miel en familia = ${indice}`)
let index = cpPeliculas.find((element,index) => index > 2)

console.log(`Pelicula con el primer indice > a 2 = ${index}`)

//--------------------------METODOS DE FILTRADO Y ORDENADO--------------------
let arreglo = ["miguel", "ramon", "alex", "guzman"]
let arreglo2 = arreglo.sort()
console.log(arreglo2)

//EJEMPLO
let user = [{id:1, name1:"jesus"}, {id:2, name1: "maria"}, {id:3, name1:"rogelio"}]
let filter = user.filter(x => x < 3)


//EJERCICIO 
console.log("\n--------------------EJERCICIO FILTRADO---------------------------------")
let pelis_4 = []
pelis_4.push("como entrenar a mi dragon", 
    "maze runner", 
    "mario pelicula", 
    "assasins creed",
    "son como ninos",
    "rocket league",
    "halo","amanecer de los muertos", "avatar")

console.log("Filtrado por la letra a")
let pelis_4_filt = pelis_4.filter(peliculas => peliculas.startsWith("a"))
console.log(pelis_4_filt)
console.log("pelis_4 ordenadas")
let pelis_4_s = pelis_4.sort()
console.log(pelis_4_s)
console.log("pelis_4 reverse")
let pelis_4_r = pelis_4.reverse()
console.log(pelis_4_r)
console.log("--------------------------------------------------------")


//METODOS DE MAP-REDUCE
//arr.map   crea un nuevo rreglo con los elementos que filtramos 
//arr.reduce    aplica la funcion y recorre el arreglo regresando soll un valor al final de 

//EJERCICIO 
let pelis_3 = []
pelis_3.push("Como entrenar a mi dragon", 
    "maze runner", 
    "mario pelicula", 
    "assasins creed",
    "Son como ninos",
    "rocket league",
    "halo","amanecer de los muertos", "avatar")

let pelis_filt = pelis_3.map(pelis =>({
    nombre: pelis, size:pelis.length
}))

console.log("peliculas en nueva lista\n")
console.log(pelis_filt)
console.log("------------------------------------------------------------\n")


let pelis_sum = pelis_filt.reduce((sum,pelis_filt) => sum + pelis_filt.size, 0)
console.log("suma de el tamano de peliculas = " + pelis_sum)
console.log("------------------------------------------------------------\n")


function random_photos(pelis_filt){
    console.log("<ol>")
    pelis_filt.forEach(function(item){
        console.log(`<li> ${item.nombre} </li>`)
    })
    console.log("</ol>")
}
console.log(random_photos(pelis_filt))











