document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    const amount = getInputValueByID('amount');

    const pin = getInputValueByID('pin-number');

    const mainBalance = getInnerTextByID('main-balance');

    const acount = document.getElementById("phone-number-add").value;

    const selectedBank = document.getElementById("allbank").value;

    if(pin === 1234){
        totalAmount = mainBalance + amount;
        setInnerTextByIDandValue('main-balance', totalAmount);

        const container = document.getElementById("transection-container");

        const div = document.createElement("div");
        div.classList.add("bg-red-400")
        div.innerHTML = `
        <h1 class="text-yellow-300">Added Money form ${selectedBank}</h1>
        <h3>${amount}</h3> 
        <p>account number: ${acount}</p>
          `
        container.appendChild(div)
    }
    else{
        console.log("Nothing");
    }
})