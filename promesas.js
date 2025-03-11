/*let promise = new Promise (function (resolve, reject){
    setTimeout(() => {
        if (Math.random() < 0.5){
            console.log("Procesando promesa")
            resolve('"Correcto')
        } else{
            reject (new Error("Error"))
        }
    }, 1000)
})

promise.then(function exito(result){
    console.log(result)
}, function rechazo(error){
    console.log(error)
})


let promise2 = new Promise (function (resolve, reject){
    setTimeout(() => {
        if (Math.random() < 2){
            console.log("Procesando promesa")
            resolve('"Correcto')
        } else{
            reject (new Error("Error"))
        }
    }, 3000)
})

promise2.then(function exito(result){
    console.log(result)
}, function rechazo(error){
    console.log(error)
})

/*
Promise.all([promise,promise2]).then(function exito(result){
    console.log("paso")
}, function rechazo(error){
    console.log("no paso")
})*/

/*promise2.then(function exito(result){
    console.log("entro")
}, function rechazo(error){
    console.log("no entro")
})*/

//EJERCICIO 1
function tarea1() {
    return new Promise((resolve) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {console.log("hola");
                if (i === 4) {
                    resolve("tarea_1 correcto"); 
                }
            }, ((i * (i + 1)) / 2) * 1000);
        }
    });
}

function tarea2() {
    return new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {console.log("mundo");
                if (i === 9) {
                    resolve("tarea_2 correcto"); 
                }
            }, i * 1000);
        }
    });
}

Promise.all([tarea1(), tarea2()]).then((resultados) => {
    resultados.forEach(mensaje => console.log(mensaje));
    console.log("Fin");
});

//------------------------BLOQUEANTE (ASYNC Y AWAIT)------------------------------


