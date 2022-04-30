import { useFectchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en UseFetchGifs', () => {

    test('debe de retornar el estado inicial', async () => {

        // Probar customHooks!!!!!...
        const { result, waitForNextUpdate } = renderHook(() => useFectchGifs('One Punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);
    })

    test('debe retornar un arreglo de images y loading en false', async () => {

        // Probar customHooks!!!!!...
        const { result, waitForNextUpdate } = renderHook(() => useFectchGifs('One Punch'));
        // es necesario para esperar la respuesta del hook ante una acutalizacion
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })


});