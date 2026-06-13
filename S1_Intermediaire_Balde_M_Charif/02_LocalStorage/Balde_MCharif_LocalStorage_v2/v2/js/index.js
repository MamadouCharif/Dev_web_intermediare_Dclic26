function appliquerTheme(theme) {
    document.getElementById("maPage").className = theme;

    localStorage.setItem("theme", theme);
}

function enregistrerParagraphe() {

    let texte =
        document.getElementById("txtParag").value;

    document.getElementById("p1").innerHTML = texte;

    localStorage.setItem("paragraphe", texte);
}

function initialiser() {

    if (typeof(Storage) !== "undefined") {

        // Restauration du thème
        let themeSauvegarde =
            localStorage.getItem("theme");

        if (themeSauvegarde) {
            document.getElementById("maPage").className =
                themeSauvegarde;
        } else {
            document.getElementById("maPage").className =
                "jour";
        }

        // Restauration du paragraphe
        let paragrapheSauvegarde =
            localStorage.getItem("paragraphe");

        if (paragrapheSauvegarde) {
            document.getElementById("p1").innerHTML =
                paragrapheSauvegarde;
        }

    } else {
        alert("Votre navigateur ne supporte pas l'API Web Storage.");
    }
}