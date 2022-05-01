import { fetchConToken, fetchSinToken } from "../../helper/fetch";



describe("Pruebas en Helper", () => {

    let token;

    test('fetchSinToken debe funcionar', async () => {
        const resp = await fetchSinToken('auth', { email: "byron.lopez.begins@gmail.com", password: "123456" }, 'POST');
        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();
        expect(body.ok).toBe(true);
        token = body.token;

    })

    test('fetchSinToken save token', async () => {

        localStorage.setItem('token', token);

        const resp = await fetchConToken('events/6269856d4c71763860849c42',{}, 'DELETE');
        const body = await resp.json();

        expect(body.msg).toBe('El evento no existe');

    })

})