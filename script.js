function addInventoryItem() {
    const nameInput = document.getElementById('name-input');
    const quantityInput = document.getElementById('quantity-input');
    const unitsInput = document.getElementById('units-input');
  
    const name = nameInput.value.trim();
    const quantity = parseInt(quantityInput.value);
    const units = unitsInput.value.trim();
  
    if (name && !isNaN(quantity) && units) {
      const table = document.getElementById('inventory-table');
      const newRow = table.insertRow(table.rows.length - 1);
  
      const nameCell = newRow.insertCell(0);
      const quantityCell = newRow.insertCell(1);
      const unitsCell = newRow.insertCell(2);
      const deleteCell = newRow.insertCell(3);
  
      nameCell.textContent = name;
      quantityCell.textContent = quantity;
      unitsCell.textContent = units;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        const rowIndex = newRow.rowIndex;
        table.deleteRow(rowIndex);
      };
      deleteCell.appendChild(deleteButton);
  
      nameInput.value = '';
      quantityInput.value = '';
      unitsInput.value = '';
    }
  }
  