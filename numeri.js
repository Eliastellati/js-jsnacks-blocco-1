// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.


var array = [];

for (var i=0; i<6; i++) {
    var numero = prompt('inserisci un numero');

    if (numero % 2 != 0) {
        array.push(numero);
    }
}
console.log(array);