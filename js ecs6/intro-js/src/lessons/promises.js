import {getHeroeById} from "./lessons/exports";
//Promises
const promise = new Promise((res, rej)=>{
    setTimeout(() => {
        try {
            let {name} = getHeroeById(10);
            res(name);
        } catch (err) {
            rej();
        }
        
        
        
    }, 2000);
});

promise.then((heroe)=>{
    console.log(`hola soy el heroe ${heroe}`)
})
.catch(err => console.warn('Heroe no encontrado'))
