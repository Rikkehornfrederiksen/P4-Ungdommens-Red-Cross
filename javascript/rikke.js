//kode copypasted fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log(new Date(8.64e15).toString());


//kode inspireret fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let now = new Date();
let month = now.getMonth();
let year = now.getFullYear();


// koden er inspireret fra https://www.w3schools.com/JS//js_let.asp, https://www.w3schools.com/cs/cs_arrays.php og AI-prompt (1)
let events = [
    {day:1, title:"CafeFrivllig", time: "14:00 - 17:00", location:"Netværkshuset, Østrestationsvej 33, 5000 Odense C."},
    {day:2, title:"Kundebetjening", time: "14:00 - 17:00", location:"Røde Kors Fjordsgade 9, 5000 Odense C"},
    {day:6, title:"Kundebetjening", time: "10:00 - 14:00", location:"Røde Kors Fjordsgade 9, 5000 Odense C"},
    {day:17, title: "Kundebetjening", time: "12:00 - 15:00", location:"Røde Kors Fjordsgade 9, 5000 Odense C"},
    {day:18, title:"Kundebetjening", time: "14:00 - 15:00", location:"Røde Kors Fjordsgade 9, 5000 Odense C"}
];

//kode inspireret fra https://www.w3schools.com/jsref/met_document_getelementbyid.asp
const daysContainer = document.getElementById("daysContainer");
const monthText = document.getElementById("monthYear");
const eventBox = document.getElementById("eventBox");

//koder inspireret fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
function generateCalendar(){
   
    // hjælp fra AI (5) og inspiration fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    
   let firstDayIndex = new Date(year, month, 1).getDay();

   let startingDay = (firstDayIndex === 0) ? 6 : firstDayIndex - 1;

   let daysInMonth = new Date(year, month + 1, 0).getDate();
   
   //første loop til de sidste dage i februar måned. 0-6
    for(let x = 0; x < startingDay; x++){
        //koden inspireret fra https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        let emptyDay = document.createElement("li");
        // koden inspireret fra https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
        emptyDay.style.listStyle = "none"; 
        //koden inspireret fra https://www.w3schools.com/jsref/met_node_appendchild.asp
        daysContainer.appendChild(emptyDay);
    }

    //andet loop, tager dagenen i art fra d. 6 til d. 31 marts
    //koden inspireret fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    for(let i = 1; i <= daysInMonth; i++){

        //kode inspireret fra https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        //Ai (2)
        let day = document.createElement("li");
        day.classList.add("calender_day"); 
        day.innerText = i;

       //kode inspireret fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach og AI(3)
        events.forEach(event => {
            if(event.day === i){
                let dot = document.createElement("div");
                dot.classList.add("caleder_dot"); 
                day.appendChild(dot);
            }
        });

       //AI (4) og inspiration fra https://www.w3schools.com/jsref/met_element_addeventlistener.asp
        day.addEventListener("click", function(){
            //inspiration fra https://www.w3schools.com/jsref/met_document_queryselectorall.asp
            document.querySelectorAll(".calender_day")
                .forEach(d => d.classList.remove("calender_day--active"));
            
            day.classList.add("calender_day--active");

            let eventForDay = events.find(e => e.day === i);

            if(eventForDay){
                eventBox.innerHTML = `<strong>${eventForDay.title}</strong><br>
                                     Tid: ${eventForDay.time}<br>
                                     Sted: ${eventForDay.location}`;
            } else {
                eventBox.innerHTML = "Ingen aktiviteter denne dag";
            }
        });

        daysContainer.appendChild(day);
    }
}

generateCalendar();


//krav hele pensum

//JavaScript.
//Placering og udførelse af JS.
//Fejlfinding.
//Variabler og typer.
//Operatorer.
//Arrays.
//Kontrolstruktur (if-Else).
//Kontrolstruktur (loops).
//Objekter.
//DOM (Document Object Model).
//Funktioner (mere end halvejs).
//Variable scoop (herunder LET).
//Events.
//BEM. 
//videoer (3-6 min. per person),

