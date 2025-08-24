
const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const addAmount = parseInt(document.getElementById('add-amount').value);


    if (accountNumber.length < 11) {
        alert("Please enter valid account number");
        return;
    }

    if (pinNumber !== validPin) {
        alert("Please enter valid pin number")
        return;
    }

    const avaiableBalance = parseInt(document.getElementById('avaiable-balance').innerText);
    const totalAvailableBalance = avaiableBalance + addAmount;
    document.getElementById('avaiable-balance').innerText = totalAvailableBalance;

});

//CashOut Money Feature

document.getElementById('withdraw-btn').addEventListener('click', function name(e) {
    e.preventDefault();
    //console.log("withdraw btn clicked");

    const agentNumber = document.getElementById('agent-number').value;
    const CashOutpinNumber = parseInt(document.getElementById('cashout-pin-number').value);
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);

    
    if (agentNumber.length < 11) {
        alert("Please enter valid agent number");
        return;
    }

    if (CashOutpinNumber !== validPin) {
        alert("Please enter valid pin number")
        return;
    }


    const avaiableBalance = parseInt(document.getElementById('avaiable-balance').innerText);

    if (withdrawAmount > avaiableBalance) {
        alert("don't have enough money")
        return;
    }

    const totalAvailableBalance = avaiableBalance - withdrawAmount;

    document.getElementById('avaiable-balance').innerText = totalAvailableBalance;
})


// Toggling feature

document.getElementById('add-button').addEventListener('click', function name(e) {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
})

document.getElementById('cash-out-button').addEventListener('click', function name(e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
})
