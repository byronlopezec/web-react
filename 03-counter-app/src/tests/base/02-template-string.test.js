import { getSaludo } from "../../base/02-template-string"
import '@testing-library/jest-dom'


describe('Pruebas 02-template', () => {
    test('should retornar Hola Fernando', () => {
        const nombre = 'Fernando'
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre)
    })

    // DEbe retornar Hola Carlos si no se ingresan argumentos al afuncion getSaludo
    test('should retornar Hola Carlos', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos')
    })

})
