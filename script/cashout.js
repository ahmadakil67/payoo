document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById("phone-number").value;

    const amount = getInputValueByID('cashout-amount')

    const pin = getInputValueByID('cashout-pin')

    const mainBalance = getInnerTextByID('main-balance')

    if(pin === 1234){
        totalAmount = mainBalance - amount;
        setInnerTextByIDandValue('main-balance', totalAmount);

        const container = document.getElementById("transection-container");
        const p = document.createElement("p");
        p.innerText = `
        cashout ${amount} from this ${accountNumber} account
        `
        container.appendChild(p)
    }
    else{
        alert("Enter valid PIN");
    }
})