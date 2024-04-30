
document.addEventListener('DOMContentLoaded', function() {
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');
    const rentalForm = document.getElementById('rentalForm');
    const rentalOptionsDiv = document.getElementById('rentalOptions');

    brandSelect.addEventListener('change', function() {
        const selectedBrand = brandSelect.value;
        modelSelect.innerHTML = ''; 
        if (selectedBrand === 'BMW') {
            addOption('BMW i5');
            addOption('BMW X5');
            addOption('BMW iX2');
        } else if (selectedBrand === 'Honda') {
            addOption('Civic');
            addOption('Accord');
            addOption('CR-V');
        } else if (selectedBrand === 'Ford') {
            addOption('Focus');
            addOption('Fusion');
            addOption('Escape');
        }
    });

    function addOption(optionText) {
        const option = document.createElement('option');
        option.textContent = optionText;
        modelSelect.appendChild(option);
    }

    rentalForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;
        const selectedDate = document.getElementById('date').value;
        const rentDuration = parseInt(document.getElementById('duration').value);
        
        
        const table = document.createElement('table');
        const headerRow = table.insertRow(0);
        const headers = ['Brand', 'Model', 'Date', 'Duration', 'Total Cost'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        const dataRow = table.insertRow(1);
        const data = [selectedBrand, selectedModel, selectedDate, rentDuration + ' days', calculateTotalCost(selectedBrand, rentDuration)];
        data.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            dataRow.appendChild(td);
        });

        rentalOptionsDiv.innerHTML = ''; 
        rentalOptionsDiv.appendChild(table);

        
        rentalForm.reset();
    });

    function calculateTotalCost(brand, duration) {
        let cost = 0;
        if (brand === 'BMW') {
            cost = 50 * duration;
        } else if (brand === 'Honda') {
            cost = 60 * duration;
        } else if (brand === 'Ford') {
            cost = 55 * duration;
        }
        return '$' + cost;
    }
});
