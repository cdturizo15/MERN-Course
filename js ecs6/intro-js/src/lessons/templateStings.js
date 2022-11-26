const greeting = (fullName) => {
    console.log(`Hello ${fullName}`);
}

//Template strings

const name = "John";
const lastname = "Doe";

const fullName = `${name} ${lastname}`;

greeting(fullName);