document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inputZip").addEventListener("blur", (oEvent) => {
        const zipInput = oEvent.target.value;
        console.log(zipInput);

        let canton = "";

        canton = zipInput < 1200 ? "Waadt" : 
            zipInput < 1500 ? "Genf" :
            zipInput < 1700 ? "Freiburg" :
            zipInput < 2000 ? "Wallis" :
            zipInput < 2300 ? "Neuenburg" :
            zipInput < 2500 ? "Jura" :
            zipInput < 3000 ? "Bern" :
            zipInput < 4000 ? "Basel" :
            zipInput < 10000 ? "Zürich" : "keine Ahnung";

        document.getElementById("inputCanton").value = canton;
    });
});

