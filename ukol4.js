let cislo = Number(prompt('Zadej číslo odlišné od 0: '));
while (cislo === 0) {
  alert('Zadal jsi číslo: 0. Zadej prosím číslo odlišné od 0.');
  cislo = Number(prompt('Zadej číslo odlišné od 0: '));
}
console.log(cislo);
