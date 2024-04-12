const getCompanies = () => {
    const result = getCompaniesData();
    const companiesTable = getTable(result);
    const newElementPosition = document.getElementById("companies-table");
    newElementPosition.appendChild(companiesTable);
    console.log(result);
    

}
const getCompaniesData = () => {
return [
{Company Name :"Saab AB", Place :"Stockholm" , Year : 1937},
{Company Name :"Volvo Group", Place :"Gothenburg" , Year : 1927},
{Company Name :"Sandvik AB", Place :"Stockholm" , Year : 1862},
{Company Name :"Atlas Copco Group", Place :"Nacka" , Year : 1873},
{Company Name :"Electrolux AB", Place :"Stockholm" , Year : 1919},
{Company Name :"Skanska AB", Place :"Stockholm" , Year : 1887},

];
}

const getTable = (companiesList) => {
const newTable = document.createElement("table");
companiesList.map((companies) => {
    const newRow = getRow(companies);
    newTable.appendChild(newRow);
});
return newTable;
}
const getRow = (rowData) => {
const rowToAdd = document.createElement("tr");

const tableData1 = document.createElement("td");
tableData1.innerText = rowData.companies;
rowToAdd.appendChild(tableData1);

const tableData2 = document.createElement("td");
tableData2.innerText = rowData.place;
rowToAdd.appendChild(tableData2);

const tableData3 = document.createElement("td");
tableData3.innerText = rowData.year;
rowToAdd.appendChild(tableData3);

return rowToAdd;
}

const target = document.getElementById("btn");
target.addEventListener("click",getCompanies);


