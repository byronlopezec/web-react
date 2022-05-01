import { fetchSinToken } from "../../helper/fetch";



describe("Pruebas en Helper", () => {

    test('fetchSinToken debe funcionar', async () => {
        const resp = await fetchSinToken('auth', { email: "byron.lopez.begins@gmail.com", password: "123456" }, 'POST');
        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();
        expect(body.ok).toBe(true);

    })

})