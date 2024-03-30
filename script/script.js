// Calculate Expense starts here

function calculateExpense() {
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const clothes = document.getElementById('clothes').value;

    if (
        income < 0 || income == "" || food < 0 || food == "" || rent < 0 || rent == "" || clothes < 0 || clothes == ""
    ) {
        alert('Inputs must be positive numbers');
        return;
    }

    // calculate expense

    const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);
    

    // calculate balance 
    const balance = parseInt(income) - expense;
    
    // validate income
    if(expense > income){
        alert('Expense cannot be more than income');
    }
    else{
        // view total expense and balance 
      document.getElementById('total-expense').innerText =expense;
        document.getElementById('balance').innerText = balance;
    }
    console.log(expense, balance);

};
// calculateExpense ends here 

function calculateSavings (){
    const income = document.getElementById('income').value;
    // calculate saving amount
    const savePercentage = document.getElementById('save').value;
    // validate saving percentage value
    if(savePercentage < 0){
        alert('Provide positive saving value');
        return;
    }

const savingAmount = (savePercentage / 100) * income;

// calculate remaining balance 

const balance = document.getElementById('balance').innerText;
const remainingBalance = balance - savingAmount;

// validate savingAmount 
if(savingAmount > balance ) {
    alert('Saving amount is greater than balance');
} else{
    // view saving amount and remaining balance 
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaing-balance').innerText = remainingBalance;
}
}