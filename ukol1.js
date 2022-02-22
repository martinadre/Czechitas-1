/*Založte proměnné pro jméno, věk, váhu v kg a  výšku  v metrech - nastavte jim libovolnou hodnotu.
Spočtěte BMI
Do konzole vypište větu ve formátu:

Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.
*/

let jmeno = 'Martina';
let vek = 36;
let vaha = 62;
let vyska = 1.76;

let BMI = vaha / vyska ** 2;
console.log(
  'Jmenuji se ' +
    jmeno +
    ', ' +
    'je mi ' +
    vek +
    ' let' +
    ', ' +
    'vážím ' +
    vaha +
    'kg' +
    ', ' +
    'měřím ' +
    vyska +
    'm ' +
    'a moje BMI je ' +
    BMI +
    '.'
);
