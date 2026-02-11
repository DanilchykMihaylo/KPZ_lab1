const m = 5
const n = 3
function renderTable(container, rows, cols) {
    container.appendChild(createTable(rows, cols));
}

function createTable(rows, cols) {
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            row.appendChild(document.createElement('td'));
        }
        table.appendChild(row);
    }

    return table;
}

// Dependency Injection
const container = document.getElementById("tableContainer");
renderTable(container, TABLE_CONFIG.rows, TABLE_CONFIG.cols);


