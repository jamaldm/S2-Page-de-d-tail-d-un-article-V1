//exercise 1 
let score = 8;
let seuil = 10;
console.log(score > seuil);   
console.log(score === seuil);
console.log(score !== seuil);

let estValide = score >= seuil;
console.log(estValide); 

let inscrit = true;
let paiement = false;
let acces = score >= seuil && inscrit === true;
console.log(acces); 

let entree = inscrit === true || paiement === true;
console.log(entree); 