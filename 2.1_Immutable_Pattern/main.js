let array = ["one", "two", "three", "four"];

let array2 = [...array];

array.push("five");

console.log(JSON.stringify(array2));