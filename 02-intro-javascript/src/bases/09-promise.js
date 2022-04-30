import getHeroeById from "./bases/08-imp-exp"


// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const p1 = getHeroeById(2);

//         resolve(p1)
//     },2000)
// })
const getHeroeByAync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1)
            } else {
                
                reject('No se pudo econtrar el heroe '+id)
            }

        }, 2000)
    })
}



getHeroeByAync(3).then(console.log)
getHeroeByAync(10).catch(console.log)

