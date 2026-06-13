// Vérification du support de Local Storage
function verifierSupport() {
    if (typeof(Storage) !== "undefined") {
        console.log("Votre navigateur supporte l'API Web Storage !");
    } else {
        alert("Votre navigateur ne supporte pas l'API Web Storage.");
    }
}

// Appliquer un thème et l'enregistrer
function appliquerTheme(theme) {
    let page = document.getElementById("maPage");

    page.className = theme;

    localStorage.setItem("theme", theme);
}

// Initialisation au chargement de la page
function initialiser() {
    verifierSupport();

    let themeSauvegarde = localStorage.getItem("theme");

    if (themeSauvegarde) {
        document.getElementById("maPage").className = themeSauvegarde;
    } else {
        document.getElementById("maPage").className = "jour";
    }
}