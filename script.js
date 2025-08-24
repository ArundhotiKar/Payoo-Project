//login button functionality

document.getElementById('login-btn').addEventListener("click", function name(event) {
    // console.log('login button clicked');
    // console.log(event);

    event.preventDefault();
    const mobileNumber=12345678910;
    const pinNumber=1234;

    
    const mobileNumberValue=document.getElementById('mob-number').value;
    const mobileNumberValueConverted=parseInt(mobileNumberValue);

    
    const pinNumberValue=document.getElementById('pin-number').value;
    const pinNumberValueConverted=parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted);
    // console.log(pinNumberValueConverted);

    if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber)
    {
        window.location.href="home.html";
    }else{
        alert("Invalid");
    }
})