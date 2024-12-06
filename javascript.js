// script.js
function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const percent = parseFloat(document.getElementById('percent').value);
    
    if (isNaN(bill) || isNaN(percent)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const tipAmount = bill * (percent / 100);
    const totalAmount = bill + tipAmount;
  
    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
  }