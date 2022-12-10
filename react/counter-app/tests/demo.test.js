test('Esta prueba no debe de fallar', () => {
    // Inicialización
    const mensaje = 'Hola Mundo';

    // Estimulo
    const mensaje2 = mensaje.trim();
    //Aserciones
    expect( mensaje ).toBe( mensaje2 )

})