let empleados = [{
    id: 1,
    nombre: 'Luis'
},
{
    id: 2,
    nombre: 'Henry'
}, 
{
    id: 3,
    nombre: 'Carlos'
}];



let salarios = [{
    id: 1,
    salario : 1000
},
{
    id: 2,
    salario: 2000
}];



let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if ( !empleadoDB ) {
        callback(`No existe un empleado con el id ${ id} `);
    } else {
        callback(null, empleadoDB);
    }

    //console.log(empleadoDB);
};

let getSalario = (empleado, callback) => {

    let SalarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!SalarioDB ) {
        callback(`No se encontró un salario para el empleado ${ empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: SalarioDB.salario,
            id: empleado.id
        });        
    }


};

getEmpleado(3, (err, empleado) => {

    if ( err ) {
        return console.log(err);
    } 
    
    getSalario( empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        } 

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    });
});
