
// Sparret med AI 
// array med alle påkrævede felter — kilde: https://www.w3schools.com/js/js_arrays.asp
const paakraevedeFelter = ["fornavn", "efternavn", "alder", "email", "telefon", "postnr", "by"];

// viser fejl under feltet — kilde: https://www.w3schools.com/js/js_functions.asp
function visFejl(felt) {
    felt.classList.add("felt__input--fejl");
    felt.nextElementSibling.classList.add("fejl--synlig");
}

// fjerner fejl igen
function fjernFejl(felt) {
    felt.classList.remove("felt__input--fejl");
    felt.nextElementSibling.classList.remove("fejl--synlig");
}

// tjekker at email har @ og punktum — kilde: https://www.w3schools.com/js/js_string_methods.asp
function tjekEmail(emailVaerdi) {
    return emailVaerdi.includes("@") && emailVaerdi.includes(".");
}

// validerer hele formularen, returnerer true/false
// Sparret med AI — kilde if/else: https://www.w3schools.com/js/js_if_else.asp
// kilde loop: https://www.w3schools.com/js/js_loop_for.asp
function valider() {
    let formularErGyldig = true;

    // looper over felter og tjekker om de er tomme
    // trim() så mellemrum ikke tæller — kilde: https://www.w3schools.com/jsref/jsref_trim_string.asp
    for (let i = 0; i < paakraevedeFelter.length; i++) {
        let felt = document.getElementById(paakraevedeFelter[i]);
        if (felt.value.trim() === "") {
            visFejl(felt);
            formularErGyldig = false;
        } else {
            fjernFejl(felt);
        }
    }

    // ekstra tjek på email-format
    let emailFelt = document.getElementById("email");
    if (emailFelt.value.trim() !== "" && !tjekEmail(emailFelt.value)) {
        visFejl(emailFelt);
        formularErGyldig = false;
    }

    // alder skal være tal mellem 15-99 — kilde: https://www.w3schools.com/jsref/jsref_parseint.asp
    let alderFelt = document.getElementById("alder");
    let alderTal = parseInt(alderFelt.value);
    if (isNaN(alderTal) || alderTal < 15 || alderTal > 99) {
        visFejl(alderFelt);
        formularErGyldig = false;
    }

    // dropdown bruger sin egen css-klasse så den tjekkes separat
    let aktivitetFelt = document.getElementById("aktivitet");
    let fejlAktivitet = document.getElementById("fejl-aktivitet");
    if (aktivitetFelt.value === "") {
        aktivitetFelt.classList.add("dropdown__select--fejl");
        fejlAktivitet.classList.add("fejl--synlig");
        formularErGyldig = false;
    } else {
        aktivitetFelt.classList.remove("dropdown__select--fejl");
        fejlAktivitet.classList.remove("fejl--synlig");
    }

    return formularErGyldig;
}

// klik på knap — viser popup hvis formularen er ok
// kilde events: https://www.w3schools.com/js/js_events.asp
document.getElementById("indsend-knap").addEventListener("click", function () {
    if (valider()) {
        document.getElementById("popup").classList.add("frivillig-popup--synlig");
    }
});

// rydder fejl på dropdown når man vælger noget — kilde: https://www.w3schools.com/jsref/event_onchange.asp
document.getElementById("aktivitet").addEventListener("change", function () {
    this.classList.remove("dropdown__select--fejl");
    document.getElementById("fejl-aktivitet").classList.remove("fejl--synlig");
});

// realtime — fejl forsvinder mens man skriver — kilde: https://www.w3schools.com/jsref/event_oninput.asp
// Sparret med AI
for (let i = 0; i < paakraevedeFelter.length; i++) {
    let felt = document.getElementById(paakraevedeFelter[i]);
    felt.addEventListener("input", function () {
        if (this.value.trim() !== "") {
            fjernFejl(this);
        }
    });
}