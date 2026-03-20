
const buttons = document.querySelectorAll('.card-vagt__button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const card = button.closest('.card-vagt');
        card.classList.add('card-vagt--anmodet');
    });
});