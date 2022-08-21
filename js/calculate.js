document.getElementById('calculate-button').addEventListener('click', function () {
   // get income
   const income = getValueFromInput('incomeAmount');
   // get all the expense 
   const foodCost = getValueFromInput('food-cost');
   const rentCost = getValueFromInput('rent-cost');
   const clothCost = getValueFromInput('cloth-cost');

   if(income < 0 || foodCost < 0 || rentCost < 0 || clothCost < 0){
      alert('Please select the proper value')
      return;
   }

   if(isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)){
      alert('Please enter only number to  all field')
      return;
   }

   // calculate cost
   const totalCost = foodCost + rentCost + clothCost;
   // calculate balance
   balance = income - totalCost;

   // validation of 
   if(income < totalCost){
      alert('this is not possible');
      return;
   }


   // set total expence
   setResult('expence-total', totalCost)

   // set balance
   setResult('balance', balance)
})

document.getElementById('save-button').addEventListener('click', function () {
   // get balance and saving balance
   const balanceAfterExpence = getValueFromText('balance');
   const savingInPercentage = getValueFromInput('savingPercentage');

   if(savingInPercentage < 0 || savingInPercentage > 100){
      alert('percent cant be negative and more than 100')
      return;
   }

   if(isNaN(savingInPercentage)){
      alert('Please enter only number to  all field')
      return;
   }

   const savingInAmount = balanceAfterExpence * savingInPercentage / 100;

   // set savings
   setResult('save-amount', savingInAmount);
   

   // set remaining Balance
   const remainingBalance = balanceAfterExpence - savingInAmount;
   setResult('remaining-balance', remainingBalance);
})


