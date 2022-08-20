document.getElementById('calculate-button').addEventListener('click', function () {
   // get income
   const income = getValueFromInput('incomeAmount');
   // get all the expense 
   const foodCost = getValueFromInput('food-cost');
   const rentCost = getValueFromInput('rent-cost');
   const clothCost = getValueFromInput('cloth-cost');

   // calculate cost
   const totalCost = foodCost + rentCost + clothCost;
   // calculate balance
   balance = income - totalCost;



   // set total expence
   setResult('expence-total', totalCost)

   // set balance
   setResult('balance', balance)
})

document.getElementById('save-button').addEventListener('click', function () {
   // get balance and saving balance
   const balanceAfterExpence = getValueFromText('balance');
   const savingInPercentage = getValueFromInput('savingPercentage');

   const savingInAmount = balanceAfterExpence * savingInPercentage / 100;

   // set savings
   setResult('save-amount', savingInAmount);
   

   // set remaining Balance
   const remainingBalance = balanceAfterExpence - savingInAmount;
   setResult('remaining-balance', remainingBalance);
})


