/*Ukol 1:
Nechte uživatele zadat 2 čísla, které značí dolní a horní mez
na číselné ose celých čísel – včetně.
Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.
Vypište pomocí FOR
*/

let dolniMez = Number(prompt('Zadej dolní mez'));
let horniMez = Number(prompt('Zadej horní mez'));

for (let i = dolniMez; i <= horniMez; i++) {
  console.log(i);
}
