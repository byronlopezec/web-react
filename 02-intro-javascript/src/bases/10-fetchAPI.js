const api_key = 'IeSlcE9JlBLhzpNlK7PPFQHfkvcg0mjY'

const peticion = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${api_key}`)

// peticion.then(resp => {
//     resp.json() // regresa una promesa.
// });

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        console.log(data)
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    }).catch(console.warn)