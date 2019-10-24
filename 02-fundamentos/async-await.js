/**
 *  Async - Await 
 */

// let getNombre = async() => {
//     return 'Luis';
// };

let getNombre = () => {
    return new Promise ((resolve, reject) => {

        setTimeout( () => {

            resolve('Luis');

        }, 3000);

    });
};

let saludo = async () => {

    // Trabajar con promesas asincronas y sincronas
    let nombre = await getNombre();
    
    return `Hola ${ nombre }`;

};

// getNombre().then(nombre => console.log(nombre)).catch(e => console.log('Error de ASYNC', e));

saludo().then(mensaje => console.log(mensaje));



