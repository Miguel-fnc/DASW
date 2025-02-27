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
console.log("----------------------METODOS NUEVOS-------------------------")
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
console.log("----------------------EJERCICIO 2-------------------------------")

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
console.log("----------------------METODOS DE BUSQUEDA-------------------------")
let indice = cpPeliculas.indexOf("luna de miel en familia")
console.log(`indice de luna de miel en familia = ${indice}`)
let index = cpPeliculas.find((element,index) => index > 2)

console.log(`Pelicula con el primer indice > a 2 = ${index}`)




