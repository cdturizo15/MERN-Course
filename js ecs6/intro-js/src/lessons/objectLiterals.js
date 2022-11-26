//object literals

const person = {
    name: "John",
    lastname: "Doe",
    age: 30
}
//Mala practica cambia el valor de persona
//const person2 = person;
//Buena forma de copiar un objeto
const person2 = {...person};
console.log(person);
console.table(person);


