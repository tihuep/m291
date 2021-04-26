let array = ["Franz", "Jenny", "Karen", "Joseph", "Richard", "Florenze"];

let names = "";

array.forEach((name, index) => {
    if (index + 2 < array.length)
        names += name + ", ";
    else if (index + 2 == array.length)
        names += name + " und ";
    else if (index + 1 == array.length)
        names += name;
});

console.log(names);




array.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
});

console.log(array);




/*
let arrayUpper = [...array];

arrayUpper.forEach((name, index) => {
    arrayUpper[index] = name.toUpperCase();
});*/
let arrayUpper = array.map((name) => name.toUpperCase());

console.log(arrayUpper);




let arrayCaesar = array.map((name) => String.fromCharCode(...name.split('').map(char => char.charCodeAt() + 13)));

console.log(arrayCaesar);




let arrayLetters = array.map((name) => name.substring(0,1)).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] === undefined ? 1 : accumulator[currentValue] + 1;
    return accumulator;
}, {});

console.log(arrayLetters);