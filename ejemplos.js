console.log("uno")


setTimeout(function timeout() {

    console.log("A")

}, 7000)



setTimeout(function timeout() {

    console.log("B")

}, 0)



setTimeout(function timeout() {

    console.log("C")

}, 2000)

 

setTimeout(function timeout() {

    console.log("D");

}, 1000);

 

console.log("end");