function getValueFromInput(inputFieldId){
   const inputField = document.getElementById(inputFieldId);
   const inputValuestring = inputField.value;
   const inputValue = parseFloat(inputValuestring);
   // inputField.value = '';

   return inputValue;
}

function getValueFromText(elementId){
   const textElement = document.getElementById(elementId);
   const inputValueString = textElement.innerText;
   const inputValue = parseFloat(inputValueString);

   return inputValue;
}

function setResult(elementId, result){
   const textElement = document.getElementById(elementId);
   textElement.innerText = result;
}