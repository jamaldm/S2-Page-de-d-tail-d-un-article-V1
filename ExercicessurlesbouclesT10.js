let compteur = 0;
let somme = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        compteur++;
        somme = somme + i;
    }
}

console.log("Nombre de pairs : " + compteur);
console.log("Somme des pairs : " + somme);