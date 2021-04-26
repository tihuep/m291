window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnGo").addEventListener("click", () => {
        const from = document.getElementById("inputFrom").value;
        const to = document.getElementById("inputTo").value;
    
    
        for (let i = from; i <= to; i++)
            console.log(i % 3 == 0 && i % 5 == 0 ? "FizzBuzz" : i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i);
    });
});