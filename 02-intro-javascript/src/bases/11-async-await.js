// const getImagenPromesa = ()=>{
//     const promesa = new Promise((resolve,reject)=>{
//         resolve('Contenido de la promesa');
//     });

//     return promesa;
// }

// Tambie puede simplificarse como:
// const getImagenPromesa = () => {
//     return new Promise(resolve => resolve('Contenido de la promesa')
//     )
// }

const getImagen = async () => {

    try {
        const api_key = 'IeSlcE9JlBLhzpNlK7PPFQHfkvcg0mjY'
        const resp = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${api_key}`)
        const { data } = await resp.json();
        const { url } = data.images.original;
        // peticion.then(resp => {
        //     resp.json() // regresa una promesa.
        // });

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)

        console.log(data)

    } catch (error) {
        console.error(error);
    }

}
getImagen()

