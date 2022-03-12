/*
Rozšiř předešlý úkol tak, že nebude vypisovat pouze součet,
ale rozepíše celou rovnici, jak k němu přišel:
*/

let cislo = Number(prompt('Zadej číslo:'));

let soucet = 0;
let vypocet = '0';

while (cislo !== 0) {
  console.log('Vstup: ' + cislo);
  soucet += cislo;
  vypocet = vypocet + ' + ' + cislo;
  console.log(vypocet + ' = ' + soucet);
  cislo = Number(prompt('Zadej další číslo:'));
}
