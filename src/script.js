function updateBalance(button) {
    console.log('updateBalance function called');
    const card = button.closest('.flex-1');
    console.log(card.querySelector('#donation-value'));
    let balance = parseFloat(document.getElementById('balance').innerText);
    const donationValue = parseFloat(card.querySelector('#donation-value').value);
    let donationAmount = parseFloat(card.querySelector('#donation-amount').innerText);
    if(donationValue <= balance){
        if(donationValue > 0){
            document.getElementById('balance').innerText = balance - donationValue;
            card.querySelector('#donation-amount').innerText = donationAmount+donationValue;
            console.log("Balance updated to: ", balance);
        }
        else{
            alert("Please enter a valid donation amount");
        }
    } else{
        alert("Insufficient balance");
    }
    card.querySelector('#donation-value').value = '';

    
}