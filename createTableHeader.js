export function createTableHeader() {
    const myTable = document.getElementById('myTable');
    myTable.classList.add("table");
    myTable.classList.add("table-hover");
    const myTableHeader = document.getElementById('myTableHeader');
    //
    // Build out the table header:
    myTableHeader.insertRow(0);
    myTableHeader.rows[0].insertCell(0);
    myTableHeader.rows[0].insertCell(1);
    myTableHeader.rows[0].insertCell(2);
    myTableHeader.rows[0].insertCell(3);
    myTableHeader.rows[0].cells[0].innerHTML = "Name";
    myTableHeader.rows[0].cells[1].innerHTML = "Link";
    myTableHeader.rows[0].cells[2].innerHTML = "Category";
};







