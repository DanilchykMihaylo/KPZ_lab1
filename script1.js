const m = 5
const n = 3
function createTable(m, n) {
    const table = document.createElement('table');
    for (let i = 0; i < m; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    return table;
}
const container = document.getElementById('tableContainer');
container.appendChild(createTable(m, n));

