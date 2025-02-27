let grade = 9;
let name1 = "sebas";
let pass = passed;
let fail = failed;

//FUNCIONES
function generateReport (name, grade, passed, failed){
    if (grade<6){
        failed(name,grade);
    }
    else{
        passed(name,grade);
    }
}

function passed(name, grade){
    console.log(`El alumno ${name} a aprobado el examen con una calificacion
    aprobatoria de ${grade}`);
}

function failed(name,grade){
    console.log(`El alumno ${name} a reprobado el examen con una calificacion
    reprobatoria de ${grade}`);
}

let mult = (a,b) => a*b; 
let greet = () => console.log("Bienvenido")
let concatenate = (a, b) => {
    let result = a +" " + b;
    return result
}

//MAIN
generateReport("miguel",9,passed,failed);
generateReport(name1, grade,pass,fail)
generateReport("miguel",grade,function(name,grade) {
    console.log(`El alumno ${name} a aprobado el examen con una calificacion
        aprobatoria de ${grade}`);
}, function(name,grade) {
    console.log(`El alumno ${name} a reprobado el examen con una calificacion
        reprobatoria de ${grade}`);
    })

let num1 = 5;
let num2 = 10;
console.log(mult(num1,num2))

let apellido = "franco"
let nombre = "miguel "

console.log(concatenate(apellido, nombre))