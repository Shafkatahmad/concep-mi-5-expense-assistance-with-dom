// getting all the values


// calculate button
document.getElementById('calculate').addEventListener('click', function(event) {
  event.preventDefault();
  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = balance.toFixed(2);

  document.getElementById('results').classList.remove('hidden');

  // console.log(totalExpenses, balance);
})

// Saving button
document.getElementById('calculate-savings').addEventListener('click', function() {
  const savingPercentace = parseFloat(document.getElementById('savings').value);

  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  
  const savingAmount = (savingPercentace * balance) / 100;

  const savingElement = document.getElementById('savings-amount');
  savingElement.innerText = savingAmount.toFixed(2);

  const remainingBalance = balance - savingAmount;
  const remainingElement = document.getElementById('remaining-balance');
  remainingElement.innerText = remainingBalance.toFixed(2);
})