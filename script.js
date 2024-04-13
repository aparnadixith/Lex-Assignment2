const tableContainer = document.getElementById("table-container");
const getCompanies = () => {
    const result = getCompaniesData();
    const companiesTable = getTable(result);
    tableContainer.appendChild(companiesTable);
}
const getCompaniesData = () => {
return [
{CompanyName :"Saab AB", Place :"Stockholm" , Year : 1937},
{CompanyName :"Volvo Group", Place :"Gothenburg" , Year : 1927},
{CompanyName :"Sandvik AB", Place :"Stockholm" , Year : 1862},
{CompanyName :"Atlas Copco Group", Place :"Nacka" , Year : 1873},
{CompanyName :"Electrolux AB", Place :"Stockholm" , Year : 1919},
{CompanyName :"Skanska AB", Place :"Stockholm" , Year : 1887}

];
}

const getTable = (companiesList) => {
const newTable = document.createElement("table");
companiesList.map((Company) => {
    const newRow = getRow(Company);
    newTable.appendChild(newRow);
});
return newTable;
}
const getRow = (rowData) => {
const rowToAdd = document.createElement("tr");

const tableData1 = document.createElement("td");
tableData1.innerText = rowData.CompanyName;
rowToAdd.appendChild(tableData1);

const tableData2 = document.createElement("td");
tableData2.innerText = rowData.Place;
rowToAdd.appendChild(tableData2);

const tableData3 = document.createElement("td");
tableData3.innerText = rowData.Year;
rowToAdd.appendChild(tableData3);

return rowToAdd;
}

const target = document.getElementById("btn");
target.addEventListener("click",getCompanies);


