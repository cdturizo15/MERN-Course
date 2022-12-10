import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas a funciones get', ()=>{
    test('getUser retorna un objeto user', ()=>{
        //Inicializacion
        const dataUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'}
        
        //Accion
        const infoUser = getUser()
        //Asercion
        expect(infoUser).toStrictEqual(dataUser)

    })
    test('getUsuarioActivo retorna un objeto', () => { 
        //Inicializacion
        const name = 'Miguel';
        const objectUser = {
            uid: 'ABC567',
            username: name}
        //Accion
        const user = getUsuarioActivo(name)

        //Asercion
        expect(user).toStrictEqual(objectUser)
    })
})

