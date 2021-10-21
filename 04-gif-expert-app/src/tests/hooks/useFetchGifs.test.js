import { useFectchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en UseFetchGifs', () => {

    test('debe de retornar el estado inicial', () => {

        // Probar customHooks!!!!!...
        const { result } = renderHook(() => useFectchGifs('One Punch'));
        const { data, loading } = result.current;

        expect(data.length).toBe(0);
        expect(loading).toBe(true);
    })

});