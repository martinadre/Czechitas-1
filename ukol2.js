/*
Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací:
 Jméno muže a ženy ​
 Rok a měsíc narození muže i ženy​
Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu​ "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců​"
Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať nemusíme řešit absolutní hodnotu z Math.abs())
*/

let jmenoMuz = 'Tom';
let jmenoZena = 'Martina';
let rokMuz = 1992;
let rokZena = 1995;
let mesicMuz = 11;
let mesicZena = 12;

let rozdilMesicu = (rokZena - rokMuz) * 12 + (mesicZena - mesicMuz);

console.log(rozdilMesicu);
