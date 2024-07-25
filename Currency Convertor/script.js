console.log("Nani Shree");

const fromAmount = document.querySelector('.amount');
const convertedAmmountE = document.querySelector('.coverted-amount');
const fromCurrencyE = document.querySelector('.fromcurrency');
const toCurrencyE = document.querySelector('.tocurrency');
const Result = document.querySelector('.result');

// Array to populate the select tags with these countries
const countries = [ 
      {code: 'INR', name: 'Indian Rupee'},
      {code: 'USD', name: 'United States Dollar'},
      {code: 'EUR', name: 'Euro'},
      {code: 'GBP', name: 'British Pound'},
      {code: 'JPY', name: 'Japanese Yen'},
      {code: 'CAD', name: 'Canadian Dollar'},
      {code: 'AUD', name: 'Australian Dollar'},
      {code: 'CHF', name: 'Swiss Franc'},
      {code: 'CNY', name: 'Chinese Yuan'},
      {code: 'NZD', name: 'New Zealand Dollar'},
      {code: 'AED', name: 'United Arab Emirates Dirham'},
      {code: 'MXN', name: 'Mexican Peso'},
      {code: 'SGD', name: 'Singapore Dollar'},
      {code: 'HKD', name: 'Hong Kong Dollar'},
      {code: 'BRL', name: 'Brazilian Real'}
      // Add more countries and their currencies as needed
  ];
  

// Showing countries from array to select tag
countries.forEach(country => {
      const option1 = document.createElement('option');
      const option2 = document.createElement('option');

      option1.value = option2.value = country.code;
      option1.textContent = option2.textContent = `${country.code} ${country.name}`;

      fromCurrencyE.appendChild(option1);
      toCurrencyE.appendChild(option2);
      // Seeting DEafault values of select tag
      fromCurrencyE.value= "USD";
      toCurrencyE.value= "INR";

      // const option2 = document.createElement('option');
      // option2.value = country.code;
      // option2.textContent = `${country.code} ${country.name}`;
      // toCurrency.appendChild(option1);
});

// Function to get exchange rate using API
const getExchangeRate = async () => {
      const amount = parseFloat(fromAmount.value);
      const fromCurrency = fromCurrencyE.value;
      const toCurrency = toCurrencyE.value;
  
      // Fetch Data from API
  
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();
  
      const conversionRate = data.rates[toCurrency];
      const convertedAmount = amount * conversionRate;

      convertedAmmountE.value = convertedAmount;
      Result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
  }
  
  // Fetching exchange rate when user inputs the Amount
 fromAmount.addEventListener('input', getExchangeRate);

 // Fetching exchange rate when user change the Amount
 fromAmount.addEventListener('change', getExchangeRate);

 // Fetching exchange rate when user inputs the Amount
toCurrencyE.addEventListener('change', getExchangeRate);

// Fetching exchange rate when page load
window.addEventListener('load', getExchangeRate);
  