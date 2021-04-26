alert("Hello from external!");

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn1").addEventListener("click", function(oEvent) {
        if (document.getElementById("p1").innerHTML != "")
            document.getElementById("p1").innerHTML = "";
        else
            document.getElementById("p1").innerHTML = "Hello button!";
    });
});