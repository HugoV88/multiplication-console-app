//Requires
let argv = require('yargs')
    .command('create', 'Create a multiplication table text file', {
        base: {
            alias: 'b',
            demand: true,
            desc: 'Base of multplication table'
        },
        limite: {
            alias: 'l',
            default: 10,
            desc: 'Limit of multiplication table'
        }
    })
    .command('show', 'Show a multiplication table in console', {
        base: {
            alias: 'b',
            demand: true,
            desc: 'Base of multiplication table'
        },
        limite: {
            alias: 'l',
            default: 10,
            desc: 'Limit of multiplication table'
        }
    })
    .help()
    .argv;

//Exports
module.exports = {
    argv
}