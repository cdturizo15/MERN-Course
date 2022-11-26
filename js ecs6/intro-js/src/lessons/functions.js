//Functions

/* function getUserActivve(name) {
    return {
        uid: 'ABC567',
        username: name
    };
}

const userActive = getUserActivve('Fernando');
console.log(userActive); */
//With arrow functions
const getUserActivve = (name) => ({
    uid: 'ABC567',
    username: name
});

const userActive = getUserActivve('Fernando');
console.log(userActive);