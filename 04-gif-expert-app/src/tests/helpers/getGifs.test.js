import { dataGifAPI } from './../../helpers/getGifs'

describe('Prueba con fetchGifs', () => {
    test('debe traer 10 elementos', async () => {

        const gifs = await dataGifAPI('One-Punch');

        expect(gifs.length).toBe(10)

    })

})
