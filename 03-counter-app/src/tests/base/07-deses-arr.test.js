import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('deberia ser un numero y un string', () => {
        
        const [letras,numbers] = retornaArreglo();

        expect( letras).toBe('ABC');
        expect( typeof letras).toBe('string');
        expect( numbers).toBe(123);
        expect( typeof numbers).toBe('number');

    })
    
})
