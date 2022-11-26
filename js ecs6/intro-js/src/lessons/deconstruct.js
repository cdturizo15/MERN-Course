//Deconstructing the object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

const getPerson = ({name, age, city}) => `I am ${name} and I am ${age} years old and I live in ${city}`


const { name, age, city } = person;

//use context exercise

const UseContext = ({city, age}) => ({
    origin: city,
    years: age,
})

const info = UseContext(person);
const {origin, years} = info;

console.log(getPerson(person));
console.log(origin, years);