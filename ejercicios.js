//FUNCION DESCUENTO
function discount(precio, descuento){
    let precio_final = precio;
    precio = (precio * descuento) / 100;
    precio_final -= precio;
    console.log(`Aplicando un descuento del %${descuento}`);
    console.log("precio final")
    return precio_final;
}

//CONTADOR DE VOCALES
function contVowels(string){
    let c = 0;
    for (let i of string){
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u" ){
            c ++;
        }
    }
    console.log("Vocales en tu palabra")
    return c;
}

//GENERADOR DE CONTRASENAS
function createPassword(){
    let password = "";
    let char = "";
    let random = 0;
    for (i=0 ; i<15 ; i++){
        random = Math.random() * (122 - 65) + 65;
        char = String.fromCharCode(random);
        password += char
    }
    console.log(`Password created = ${password}`)
}

//EJERCICIO 1
let precio = 100;
let descuento = 50;
console.log(discount(precio,descuento));

//EJERCICIO 2
let texto = "holaaaa";
console.log(contVowels(texto));

//EJERCICIO 3
createPassword();

