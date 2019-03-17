//Requires
const fs = require('fs');
const colors = require('colors');

//Function to create a multiplication table text file
let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        //Variables
        let data = '';

        //Errors
        if (!Number(base)) {
            reject('The entered base is not a number');
            return;
        }
        if (!Number(limite)) {
            reject('The entared limit is not a number');
            return;
        }

        //Multiplication table generator
        for (let i = 1; i <= limite; i++) {
            data += `${base} + ${i} = ${base * i}\n`;
        }

        //Function to write a text file
        fs.writeFile(`./DB/base${base}-lim${limite}.txt`, data, err => {
            if (err) throw err;
            resolve(`The base${base}-lim${limite}.txt file has been created`);
        })
    });
}

//Function to print a multiplication table
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        //Errors
        if (!Number(base)) {
            reject('The base is not a number');
            return;
        }
        if (!Number(limite)) {
            reject('The limit is not a number');
            return;
        }

        //Multiplication table generator
        console.log(`============Multplication table base ${base} limit ${limite}============\n`.green)

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} + ${i} = ${base * i}`);
        }

        console.log('\n=========================================================='.green)
    })
}

//Exports
module.exports = {
    crearTabla,
    listarTabla
}