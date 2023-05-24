const obj={name:"😉"}

function sayHello(age){
    return "hello"+" "+this.name +age
}

console.log(sayHello.apply(obj,[10]))

