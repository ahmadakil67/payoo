document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if(phoneNumber.length === 11){
        if(pinNumber === "1234"){
            window.location.href = "./main.html";
        }
        else{
            alert("PIN is Incorrect");
        }
    }
    else{
        alert("Need Valid Phone Number");
    }
})