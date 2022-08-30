document.getElementById('depo-btn').addEventListener('click', function () {
    // find input value 
    const depoField = document.getElementById('depo-field');
    const newDepoFieldValueString = depoField.value;
    const newDepoFieldValueNumber = parseFloat(newDepoFieldValueString);


    // set input value to deposit area 
    const depoAmount = document.getElementById('depo-amount');
    const preDepoAmountValueString = depoAmount.innerText;
    const preDepoAmountValueNumber = parseFloat(preDepoAmountValueString);

    depoAmount.innerText = preDepoAmountValueNumber;

    // sum curren value to previous value 
    totalDeposit = newDepoFieldValueNumber + preDepoAmountValueNumber;
    depoAmount.innerText = totalDeposit;

    //total-amount find

    const totalAmount = document.getElementById('total-amount');
    const totalAmountSting = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountSting);
    // console.log(totalAmountNumber);

    // set input value to total area 
    totalAmount.innerText = newDepoFieldValueNumber + totalAmountNumber;

    // cleat input field 
    depoField.value = '';
})