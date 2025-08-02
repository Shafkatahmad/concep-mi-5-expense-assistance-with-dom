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


  // History
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";
  historyItem.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
    <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
  `

  const historyContainer = document.getElementById('history-list');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild)

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

// History tab functionality
document.getElementById('history-tab').addEventListener('click',function() {

  document.getElementById('history-tab').classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
  document.getElementById('history-tab').classList.remove('text-gray-600');

  document.getElementById('assistant-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
  document.getElementById('assistant-tab').classList.add('text-gray-600');

  document.getElementById('expense-form').classList.add('hidden');

  document.getElementById('history-section').classList.remove('hidden');
})