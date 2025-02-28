document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(convertedPin === 1234){
        totalAmount = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = totalAmount;
    }
    else{
        alert("Enter valid PIN");
    }
})