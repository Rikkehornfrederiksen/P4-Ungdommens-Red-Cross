
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

    const time = document.createElement('p');
    time.classList.add('card-vagt__time');
    time.textContent = vagt.time;

    const location = document.createElement('p');
    location.classList.add('card-vagt__location');
    location.innerHTML = vagt.location;

    const button = document.createElement('button');
    button.classList.add('card-vagt__button');
    button.textContent = 'Anmod';

    button.addEventListener('click', function() {
    if (vagt.isApplied === false) {
        vagt.isApplied = true;
        card.classList.add('card-vagt--anmodet');
        button.textContent = 'Anmodet';
    } else {
        console.log('Vagten er allerede anmodet');
    }
});

    card.appendChild(date);
    card.appendChild(line);
    card.appendChild(content);
    content.appendChild(text);
    text.appendChild(heading);
    heading.appendChild(dot);
    heading.appendChild(title);
    text.appendChild(time);
    text.appendChild(location);
    content.appendChild(button);

    container.appendChild(card);

    if (vagt.isApplied === true) {
    card.classList.add('card-vagt--anmodet');
}
});
