import * as readline from 'readline';
import { No } from './No';

const primeiroNo = new No<string>('A');
let ultimoNo = primeiroNo;

const leitor = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

console.log("Olá, mundo!");
let entrada;
leitor.question("Entrada: ", (entrada) => {
    console.log(entrada);
    leitor.close();
});