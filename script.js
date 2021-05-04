// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var names = ['Lucas', 'John', 'Mark', 'Jess', 'Lorenzo', 'Antonio', 'James', 'Claire', 'Hannah', 'Joe'];
var surnames = ['Robertson', 'Milner', 'Gomez', 'Van Dijk', 'Henderson', 'Jota', 'Clarkson', 'Smith'];

var guestList = [];

for (var i = 0; i  < 10; i++) {
    var randomNameNumber = Math.floor(Math.random() *  (( names.length - 1 )  - 0  + 1) + 0);
    var randomSurnameNumber = Math.floor(Math.random() *  (( surnames.length - 1 )  - 0  + 1) + 0);

    var newFullName = names[randomNameNumber] + ' ' + surnames[randomSurnameNumber];

    guestList.push(newFullName);

    document.getElementById('list').innerHTML += "<li>" + guestList[i] + "</li>" ;
}    ;

console.log(guestList);

