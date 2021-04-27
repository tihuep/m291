const minLenght = 6;
const maxLength = 50;
const containNumber = true;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", (oEvent) => {
        oEvent.preventDefault();
        const form = document.getElementById("form");
        const inputPassword = document.getElementById("inputPassword");
        const inputPasswordConf = document.getElementById("inputPasswordConf");

        const pattern = new RegExp(`^[\\D${containNumber ? '\\d' : ''}]{${minLenght},${maxLength}}$`);

        if (inputPassword.value !== ""){
            if (inputPassword.value === inputPasswordConf.value) {
                if (inputPassword.value.match(pattern)){
                    displayError("alles klar");
                }else {
                    displayError("Das Passwort stimmt nicht mit den Anforderungen überein!")
                }
            }else {
                displayError("Die Passwörter müssen übereinstimmen!");
            }
        }else{
            displayError("Geben Sie ein Passwort ein!");
        }
    });
});

function displayError(message) {
    const error = document.getElementById("error");
    error.innerHTML = message;
    error.style.color = "red";
}