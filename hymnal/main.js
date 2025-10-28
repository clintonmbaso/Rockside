// Function to get all data from the provided data files
function getAllData() {
    let allData = [];
    allData = allData.concat(English, Tonga, Bemba, Chewa, Lozi);
    return allData;
}

// Function to display the data
function displayData(data, language) {
    const dataList = document.getElementById(`dataList${language}`);
    dataList.innerHTML = '';
    data.forEach(hymn => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <div>
                <strong>No:</strong> ${hymn.No}
                <strong>Title:</strong> ${hymn.Title}
                <strong>Key:</strong> ${hymn.Key}<hr>`;
                
        hymn.Verses.forEach((verse, index) => {
            listItem.innerHTML += `
                <strong>Verse ${index + 1}:</strong><br>
                <div>${verse}</div>`;
        });

        listItem.innerHTML += `
            <strong>Chorus:</strong><br>
            <div>${hymn.Chorus}</div>`;
            
        if(hymn.Bridge) {
            listItem.innerHTML += `
                <strong>Bridge:</strong><br>
                <div>${hymn.Bridge}</div>`;
        }

        listItem.innerHTML += `<hr></div>`;
        dataList.appendChild(listItem);
    });
}

// Function to filter data
function filterData() {
    const query = document.getElementById('filterInput').value.toLowerCase();
    const allData = getAllData();
    const filterType = document.querySelector('input[name="filterType"]:checked').value;
    const filteredData = allData.filter(hymn => {
        return hymn[filterType].toLowerCase().includes(query);
    });
    
    displayData(filteredData, 'English');
    displayData(filteredData, 'Tonga');
    displayData(filteredData, 'Bemba');
    displayData(filteredData, 'Chewa');
    displayData(filteredData, 'Lozi');
}

// Event listener for filtering
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    filterData();
});