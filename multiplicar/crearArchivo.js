const fs = require('fs');


let data = '';


function escribirArchivo(base, limite) {
    for (let i = 1; i <= limite; i++) {

        data += (`${base} * ${i} = ${base*i}\n`);
    }
    fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
        if (err) {
            throw new Error('Error')
        } else {
            return `tabla-${base}.txt`;
        }
    });

}


let listarArchivo = (base, limite) => {

    for (let i = 1; i <= limite; i++) {

        data += (`${base} * ${i} = ${base*i}\n`);


    }
    console.log(data)


}



let generarArchivo = async(base, limite) => {


    if (!Number(base || limite)) {

        throw new Error(`El valor ${base} no corresponde a un numero`)

    } else {

        escribirArchivo(base, limite);

    }
}




module.exports = {
    generarArchivo,
    listarArchivo
}