
const vagter = [
    {
        dateDay: 'Ons. 4.',
        dateMonth: 'April',
        title: 'Kundebetjening',
        time: '14.00-17.00, Røde Kors',
        location: 'Fjordsgade 9, 5000 Odense C',
        isApplied: false
    },
    {
        dateDay: 'Tors. 11.',
        dateMonth: 'April',
        title: 'Kundebetjening',
        time: '14.00-17.00, Røde Kors',
        location: 'Fjordsgade 9, 5000 Odense C',
        isApplied: false
    },
    {
        dateDay: 'Man. 16.',
        dateMonth: 'April',
        title: 'Kundebetjening',
        time: '10.00-14.00, Røde Kors',
        location: 'Fjordsgade 9, 5000 Odense C',
        isApplied: false
    }
];

const container = document.getElementById("overblik-vagter");

vagter.forEach(function(vagt) {
    const card = document.createElement('article');
    card.classList.add('card-vagt');

    const date = document.createElement('p');
    date.classList.add('card-vagt__date');
    date.innerHTML = vagt.dateDay + '<br>' + vagt.dateMonth;
    
    card.appendChild(date);
    container.appendChild(card);
});
