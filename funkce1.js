/*Napište funkci, která vypíše součet, rozdíl, násobek a podíl 2 
zadaných čísel, rozdíl zobrazujte jako absolutní hodnotu.
*/

function SRNP(x, y) {
  console.log('x + y = ' + x + y);
  console.log('x - y = ' + (x - y));
  console.log('x*y = ' + x * y);
  console.log('x / y = ' + x / y);
}

SRNP(5, 2);

/*Napište funkci, který vypíše informaci, zda zadané číslo je 
nebo není prvočíslo.
- prvočíslo - dělitelné pouze 1 a samo sebou
- zbytek po dělení: % - modulo
- v první moment pčedpokládejme, ze číslo JE prvočíslo a 
budeme případně rozporovat toto tvrzeni*/

function jePrvocislo(x) {
  let jePrvocislo = true;

  for (let i = 2; i <= x; i++) {
    if (x % i === 0) {
      jePrvocislo = false;
      break;
    } 

    return "Číslo: " + x + " je prvocislo? " + jePrvocislo
    }
  }
}

jePrvocislo(9);
