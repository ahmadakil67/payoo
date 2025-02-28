document.getElementById('cashout').style.display = "none";

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = "block";
    document.getElementById('cashout').style.display = "none"
})

document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('addmoney').style.display = "none";
    document.getElementById('cashout').style.display = "block"
})