/*Přijměte jméno jako vstup od uživatele, dále nechte 
zadat jeho věk a vypište na základě věku jednu ze 
dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte 
právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte 
počkat ještě 4 let, než budete moci řídit auto*/

let jmeno = prompt('Napiš své jméno');
let vek = Number(prompt('Napiš svůj věk'));

if (vek >= 18) {
  console.log(
    'Vaše jméno je ' + jmeno + ', máte ' + vek + ' a máte právo řídit auto.'
  );
} else {
  let kolikzbyva = 18 - vek;
  console.log(
    'Vaše jméno je ' + jmeno + 'a zbývá Vám ještě ' + kolikzbyva + ' let.'
  );
}
