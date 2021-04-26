const name = prompt("What's your name?");

const date = new Date();
const hour = date.getHours();

if (name){
    alert(`Good ${hour < 2 && hour > 22 ? 'Night' : hour < 10 ? "Morning" : hour < 18 ? "Day" : hour < 22 ? "Evening" : ""} ${name}`);
}