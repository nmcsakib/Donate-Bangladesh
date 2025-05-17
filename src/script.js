function updateBalance(button) {
    console.log('updateBalance function called');
    const card = button.closest('.flex-1');
    let balance = parseFloat(document.getElementById('balance').innerText);
    const donationValue = parseFloat(card.querySelector('#donation-value').value);
    let donationAmount = parseFloat(card.querySelector('#donation-amount').innerText);
    const date = new Date();
    console.log(card.querySelector('.city').innerText);
    if(donationValue <= balance){
        if(donationValue > 0 ){
            document.getElementById('balance').innerText = balance - donationValue;
            card.querySelector('#donation-amount').innerText = donationAmount+donationValue;
            document.querySelector('#donatedValue').innerText = donationValue;
             my_modal_2.showModal();
            document.getElementById('no-donation').style.display = 'none';
           document.getElementById('history-container').insertAdjacentHTML('beforeend', `
  <div class="card border border-gray-300 shadow-sm p-6 gap-2 my-2">
    <h4 class="text-xl font-bold"><span class="donatedAmount">${donationValue}</span> Taka is Donated for famine-2024 at ${card.querySelector('.city').innerText}, Bangladesh</h4>
    <p class="text-lg">Date : <span class="date">${date}</span></p>
  </div>
`);

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


function showCards(){
    document.getElementById('card-container').style.display = 'flex';
    document.getElementById('history-container').style.display = 'none';
    console.log('History function called');
}
function showHistory(){
    document.getElementById('card-container').style.display = 'none';
    document.getElementById('history-container').style.display = 'flex';
    console.log('History function called');
}