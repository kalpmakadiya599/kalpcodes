document.getElementById('addMoneyBtn').addEventListener('click', function() {
    document.getElementById('addMoneyModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('addMoneyModal').style.display = 'none';
});

document.getElementById('confirmBtn').addEventListener('click', function() {
    var amountInput = document.getElementById('amountInput');
    var amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        var balanceElement = document.getElementById('balance');
        var balance = parseFloat(balanceElement.textContent);
        balance += amount;
        balanceElement.textContent = balance.toFixed(2);
        amountInput.value = '';
        document.getElementById('addMoneyModal').style.display = 'none';
    } else {
        alert('Please enter a valid amount.');
    }
});