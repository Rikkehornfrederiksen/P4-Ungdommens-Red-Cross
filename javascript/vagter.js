const GOAL = 20.5;

function calcHours() {
    let total = 0;
    document.querySelectorAll('.card-vagt.selected').forEach(card => {
        total += parseFloat(card.dataset.hours || 0);
    });
    return total;
}

function updateProgress(animate) {
    const total = calcHours();
    const pct = Math.min((total / GOAL) * 100, 100).toFixed(1);
    document.getElementById('hoursDone').textContent = total.toFixed(1);
    const fill = document.getElementById('progressFill');
    fill.style.width = pct + '%';
    if (animate) {
        fill.classList.remove('pulse');
        void fill.offsetWidth;
        fill.classList.add('pulse');
    }
}

function toggleVagt(card, event) {
    event.preventDefault();
    card.classList.toggle('selected');
    updateProgress(true);
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgress(false);
});
