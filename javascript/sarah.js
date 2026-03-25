// Sarah: Jeg har researchet og undersøgt, hvordan w3schools laver loginform (prompt 8)
// DEBUGGING
console.log("Test");

// Sarah: Jeg har sparret med ChatGPT i forbindelse med DOM (prompt 9 og 18)
// DOM
const emailInput = document.querySelector(".login__input--email");
const kodeInput = document.querySelector(".login__input--kode");
const loginForm = document.querySelector(".login__form");
const fejlText = document.querySelector(".login__fejl");


// Sarah: Jeg har fundet inspiration fra mit eget array fra JavaScript real-life (prompt 10)
// ARRAYS OG OBJEKTER
let brugere = [
    {
        email: "slpf76678@edu.ucl.dk",
        kode: "1234"
    },
    {
        email: "rhfr57412@edu.ucl.dk",
        kode: "1234"
    },
    {
        email: "mitm76713@edu.ucl.dk",
        kode: "1234"
    },
    {
        email: "lmhe74949@edu.ucl.dk",
        kode: "1234"
    },
    {
        email: "bmra76947@edu.ucl.dk",
        kode: "1234"
    },
    {
        email: "tbj@ucl.dk",
        kode: "1234"
    },
    {
        email: "fima@ucl.dk",
        kode: "1234"
    },
        {
        email: "jfje@ucl.dk",
        kode: "1234"
    },
        {
        email: "vici@ucl.dk",
        kode: "1234"
    },
        {
        email: "pkc@ucl.dk",
        kode: "1234"
    },
];


// Sarah: Jeg har sparret med ChatGPT i forbindelse med funktion, loop og if/else (prompt 12)
// FUNKTION
function checkLogin(email, kode) { // function = opret funktion, email+kode = parametre

    // LOOPS
    for (let i = 0; i < brugere.length; i++) { 


        // IF/ELSE + OPERATORER
        if (brugere[i].email === email && brugere[i].kode === kode) { // === betyder helt ens, && betyder OG
            return true;
        }

    }
    return false;

}

// Sarah: Jeg har sparret med ChatGPT i forbindelse med reload af siden og til redirect (prompt 15 og 16)
// EVENTS
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const kode = kodeInput.value;

    // VALIDERING
    let loginOK = checkLogin(email, kode);

    if (loginOK) {
        fejlText.textContent = "";
        window.location.href = "mine_vagter.html";
    } else {
        fejlText.textContent = "E-mail eller adgangskode er forkert";
    }

});