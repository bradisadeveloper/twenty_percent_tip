//Selectors and Listeners
const tipButton = document.querySelector('button');
tipButton.addEventListener('click', tip);


//Main function to calculate 20% tipa
function tip() {
    const inputTip = document.querySelector("input");
    let actualTip = (inputTip.value * 0.20).toFixed(2);
    let totalBill = +inputTip.value + +actualTip;

    document.querySelector("h1").innerHTML = `20% of $${inputTip.value} is $${actualTip}`;
    document.querySelector('p').innerHTML = "Total: $" + totalBill.toFixed(2) + "!";
}