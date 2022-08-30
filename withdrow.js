document.getElementById('with-Btn').addEventListener('click', function () {
    const withField = document.getElementById('with-field');
    const withFieldString = withField.value;
    const withFieldNumber = parseFloat(withFieldString);
    // console.log(withFieldNumber)

    // withdeow valu chane to withdrlow area 
    const withAmount = document.getElementById('with-amount');
    const withAmountSting = withAmount.innerText;
    const withAmountNumber = parseFloat(withAmountSting);
    withAmount.innerText = withFieldNumber;


    // add withdrow amount to withdrow area


    // if (withFieldNumber > totalAmountnumber) {
    //     alert('oto taka ni ra vai');
    //     return;
    // }

    const totalWithAmount = withFieldNumber + withAmountNumber;
    withAmount.innerText = totalWithAmount;



    // find the total amount 
    const totalAmount = document.getElementById('total-amount');
    const totalAmountString = totalAmount.innerText;
    const totalAmountnumber = parseFloat(totalAmountString);



    // total amount to withdrow amount minus 
    const totalWithdrow = totalAmountnumber - withFieldNumber;
    totalAmount.innerText = totalWithdrow;


    // clear withField input field 
    withField.value = '';
})