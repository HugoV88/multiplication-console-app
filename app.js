//Requires
let { crearTabla, listarTabla } = require('./multiplicar/multiplicar.js');
let { argv } = require('./config/yargs.js')

//variables
let comando = argv._[0];

//menu
switch (comando) {
    case 'create':
        crearTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err))
        break;
    case 'show':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err))
        break;
    default:
        console.log('The command is not recognized');
}