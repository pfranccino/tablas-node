const argv = require('./config/yargs').argv;
const { generarArchivo, listarArchivo } = require('./multiplicar/crearArchivo')

let comando = argv._[0]



switch (comando) {

    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;

    case 'crear':
        generarArchivo(argv.base, argv.limite).then(mensaje => console.log('Archivos creado'))
            .catch(error => console.error(error));
        break;

    default:
        console.log('Comando no reconocido');

}