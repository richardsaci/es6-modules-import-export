import { data } from './data.js';

export function createTableBody() {
    const myTableBody = document.getElementById('myTableBody');
    let name, url, category;
    // Dynamically build the rows.
    for (let i = 0; i < data.length; i++) {
        name  = data[i].name;
        url  = data[i].url;
        category  = data[i].category;
        //
        myTableBody.insertRow(i);
        //
        myTableBody.rows[i].insertCell(0);
        myTableBody.rows[i].insertCell(1);
        myTableBody.rows[i].insertCell(2);
        //
        myTableBody.rows[i].cells[0].innerHTML = name;
        myTableBody.rows[i].cells[1].innerHTML = `<a href="${url}">Link</a>`;
        myTableBody.rows[i].cells[2].innerHTML = category;

    };
};

