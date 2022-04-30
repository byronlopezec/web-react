import { getImagen } from "../../base/11-async-await"

describe('Prueba aync await', () => {
    
    test('deberia retornar la url de la imagen', async() => {

        const url = await getImagen();
        expect(url.includes('http')).toBe(true);
    })
    
})
