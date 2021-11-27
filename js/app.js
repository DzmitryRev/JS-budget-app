class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = "<p>value can't be empty or negative</p>";
      setTimeout(() => {
        this.budgetFeedback.classList.remove("showItem");
        this.budgetFeedback.innerHTML = "";
      }, 5000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }

  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if (total < 0) {
      this.balance.classList.remove("showGreen", "showBlack");
      this.balance.add("showRed");
    } else if (total > 0) {
      this.balance.classList.remove("showRed", "showBlack");
      this.balance.add("showGreen");
    } else if (total === 0) {
      this.balance.classList.remove("showGreen", "showRed");
      this.balance.add("showBlack");
    }
  }

  submitExpenseForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if (expenseValue === "" || amountValue === "" || amountValue < 0) {
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML =
        "<p>Value cannor be empty or negative</p>";
      setTimeout(() => {
        this.expenseFeedback.classList.remove("showItem");
        this.expenseFeedback.innerHTML = "";
      }, 5000);
    } else {
      let amount = parseInt(amountValue);
      this.expenseInput = "";
      this.amountInput = "";
    }
  }

  totalExpense() {
    let total = 400;
    return total;
  }
}

function eventListeners() {
  const budgetForm = document.querySelector("#budget-form");
  const expenseForm = document.querySelector("#expense-form");
  const expenseList = document.querySelector("#expense-list");

  const ui = new UI();

  budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ui.submitBudgetForm();
  });
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ui.submitExpenseForm();
  });
  expenseList.addEventListener("submit", () => {});
}

document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});
