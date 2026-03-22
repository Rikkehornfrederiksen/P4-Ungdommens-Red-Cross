
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

const container = document.getElementById('overblik-vagter');

vagter.forEach(function(vagt) {
    const card = document.createElement('article');
    card.classList.add('card-vagt');

    const date = document.createElement('p');
    date.classList.add('card-vagt__date');
    date.innerHTML = vagt.dateDay + '<br>' + vagt.dateMonth;
  
    const line = document.createElement('div');
    line.classList.add('card-vagt__line');

    const content = document.createElement('div');
    content.classList.add('card-vagt__content');

    const text = document.createElement('div');
    text.classList.add('card-vagt__text');
    
    const heading = document.createElement('div');
    heading.classList.add('card-vagt__heading');

    const dot = document.createElement('span');
    dot.classList.add('card-vagt__dot');
    
    const title = document.createElement('h2');
    title.classList.add('card-vagt__title');
    title.textContent = vagt.title;


    card.appendChild(date);
    card.appendChild(line);
    card.appendChild(content);
    content.appendChild(text);
    text.appendChild(heading);
    heading.appendChild(dot);
    heading.appendChild(title);

    container.appendChild(card);
});
