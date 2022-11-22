const rows = document.getElementById('rows');
const grid = document.getElementById('grid');

rows.innerHTML = '<div class="cell">n</div>'.repeat(24);
grid.innerHTML = '<div class="cell"></div>'.repeat(24 * 80);