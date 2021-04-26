window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");


    body.children[7].innerHTML = "Coldplay - A Rush of Blood to the Head";
    body.children[8].children[5].remove();
    body.children[8].children[4].remove();
    body.children[8].children[3].remove();
    body.children[8].children[2].remove();
    body.children[8].children[1].innerHTML = "In my Place (3:47)";
    body.children[8].children[0].innerHTML = "Politik (5:19)";



    body.children[6].remove();
    body.children[5].remove();



    body.children[8].appendChild(document.createElement("li"));


});