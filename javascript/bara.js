
const vagter = [
    {
        dateDay: 'Ons. 4.',
        dateMonth: 'April',
        title: 'Kundebetjening',
        time: '14.00-17.00',
        organisation: 'Røde Kors',
        street: 'Fjordsgade 9,',
        city: '5000 Odense C',
        isApplied: false
    },
    {
        dateDay: 'Tors. 11.',
        dateMonth: 'April',
        title: 'Kundebetjening',
        time: '14.00-17.00',
        organisation: 'Røde Kors',
        street: 'Fjordsgade 9,',
        city: '5000 Odense C',
        isApplied: false
    },
    {
        dateDay: 'Man. 16.',
        dateMonth: 'April',
        title: 'Kundebetjening',
        time: '10.00-14.00',
        organisation: 'Røde Kors',
        street: 'Fjordsgade 9,',
        city: '5000 Odense C',
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
    
    const organisation = document.createElement('p');
    organisation.classList.add('card-vagt__location');
    organisation.textContent = vagt.organisation;
    
    const street = document.createElement('p');
    street.classList.add('card-vagt__location');
    street.textContent = vagt.street;
    
    const city = document.createElement('p');
    city.classList.add('card-vagt__location');
    city.textContent = vagt.city;

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
text.appendChild(organisation);
text.appendChild(street);
text.appendChild(city);
content.appendChild(button);

if (vagt.isApplied === true) {
    card.classList.add('card-vagt--anmodet');
    button.textContent = 'Anmodet';
}

container.appendChild(card);
});
