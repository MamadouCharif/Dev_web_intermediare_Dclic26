function myFunction() {

    let nouveauPays = document.getElementById("C5").value.trim();
    let listePays = document.getElementById("lepays");

    // Vérifier que le champ n'est pas vide
    if (nouveauPays === "") {
        alert("Veuillez saisir un pays.");
        return;
    }

    // Vérifier les doublons
    for (let i = 0; i < listePays.options.length; i++) {
        if (
            listePays.options[i].text.toLowerCase() ===
            nouveauPays.toLowerCase()
        ) {
            alert("Ce pays existe déjà dans la liste.");
            return;
        }
    }

    // Ajouter le pays
    let option = document.createElement("option");
    option.text = nouveauPays;
    listePays.add(option);

    // Vider le champ
    document.getElementById("C5").value = "";

    alert("Pays ajouté avec succès.");
}

function verifiernom() {

    let nom = document.forms["F"]["nom"].value;

    if (nom.length < 8 || nom.length > 20) {
        document.getElementById("T2").innerHTML =
            "Nom invalide (8 à 20 caractères)";
        document.getElementById("C1").style.borderColor = "red";
    } else {
        document.getElementById("T2").innerHTML = "";
        document.getElementById("C1").style.borderColor = "black";
    }
}

function verifieradresse() {

    let adresse = document.forms["F"]["adresse"].value;

    if (adresse.length < 20) {
        document.getElementById("T3").innerHTML =
            "Adresse invalide (minimum 20 caractères)";
        document.getElementById("C2").style.borderColor = "red";
    } else {
        document.getElementById("T3").innerHTML = "";
        document.getElementById("C2").style.borderColor = "black";
    }
}

function verifierpostal() {

    let postal = document.forms["F"]["no_postal"].value;

    if (postal == "3000") {

        document.forms["F"]["localite"].value = "ville1";
        document.getElementById("T4").innerHTML = "";
        document.getElementById("C3").style.borderColor = "black";

    } else if (postal == "4000") {

        document.forms["F"]["localite"].value = "ville2";
        document.getElementById("T4").innerHTML = "";
        document.getElementById("C3").style.borderColor = "black";

    } else {

        document.getElementById("T4").innerHTML =
            "Code postal invalide";
        document.getElementById("C3").style.borderColor = "red";
        document.forms["F"]["localite"].value = "";
    }
}

function afficher() {

    let nom = document.forms["F"]["nom"].value;
    let adresse = document.forms["F"]["adresse"].value;
    let postal = document.forms["F"]["no_postal"].value;
    let localite = document.forms["F"]["localite"].value;

    alert(
        "Nom : " + nom +
        "\nAdresse : " + adresse +
        "\nCode postal : " + postal +
        "\nLocalité : " + localite
    );
}

function forme() {

    verifiernom();
    verifieradresse();
    verifierpostal();

    if (
        document.getElementById("T2").innerHTML === "" &&
        document.getElementById("T3").innerHTML === "" &&
        document.getElementById("T4").innerHTML === ""
    ) {
        alert("Formulaire valide");
    } else {
        alert("Veuillez corriger les erreurs");
    }
}


function enregistrer() {

    verifiernom();
    verifieradresse();
    verifierpostal();

    if (
        document.getElementById("T2").innerHTML == "" &&
        document.getElementById("T3").innerHTML == "" &&
        document.getElementById("T4").innerHTML == ""
    ) {

        localStorage.setItem("civilite",
            document.querySelector('input[name="civilite"]:checked').value);

        localStorage.setItem("nom", F.nom.value);
        localStorage.setItem("adresse", F.adresse.value);
        localStorage.setItem("postal", F.no_postal.value);
        localStorage.setItem("localite", F.localite.value);
        localStorage.setItem("pays", F.pays.value);

        alert("Données enregistrées.");
    }
    else {
        alert("Impossible d'enregistrer. Corrigez les erreurs.");
    }
}

function recuperer() {

    if (localStorage.getItem("nom") == null) {
        alert("Aucune donnée enregistrée.");
        return;
    }

    F.nom.value = localStorage.getItem("nom");
    F.adresse.value = localStorage.getItem("adresse");
    F.no_postal.value = localStorage.getItem("postal");
    F.localite.value = localStorage.getItem("localite");

    let pays = localStorage.getItem("pays");
    F.pays.value = pays;

    let civilite = localStorage.getItem("civilite");

    let radios = document.getElementsByName("civilite");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].value == civilite) {
            radios[i].checked = true;
        }
    }

    alert("Données récupérées.");
}