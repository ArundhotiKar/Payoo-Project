
const validPin = 1234;
const transactionData=[];

//function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display = "none";
    }
    const el = document.getElementById(id);
    if (el) {
        el.style.display = "block";
    }
}

//function to toggle buttons
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")

    
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}



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

    const data={
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
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

    const data={
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
    console.log(transactionData);
})


document.getElementById('transactions-button').addEventListener('click', function name(params) {
    //console.log('transaction btn clicked');
    //console.log(transactionData);
    const transactionContainer=document.getElementById('transaction-container');
    transactionContainer.innerText="";

    for(const data of transactionData)
    {
        const div=document.createElement("div");

        div.innerHTML=`
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" class="mx-auto" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>

                </div>
        `
        transactionContainer.appendChild(div);
    }
})

// toggling feature

document.getElementById("add-button").addEventListener("click",function(e){
    handleToggle("add-money-parent")

    handleButtonToggle("add-button")

})
document.getElementById("cash-out-button").addEventListener("click",function(){
    handleToggle("cash-out-parent")
    handleButtonToggle("cash-out-button")
 
})

document.getElementById("transfer-button").addEventListener("click",function(){

    handleToggle("transfer-money-parent")
    handleButtonToggle("transfer-button")
})
document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggle("get-bonus-parent")
    handleButtonToggle("bonus-button")
})
document.getElementById("bill-button").addEventListener("click",function(){
    handleToggle("pay-bill-parent")
    handleButtonToggle("bill-button")
})
document.getElementById("transactions-button").addEventListener("click",function(){
    handleToggle("transactions-parent")
    handleButtonToggle("transactions-button")
})
