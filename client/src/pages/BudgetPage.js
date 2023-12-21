// BudgetPage.js

import React, { useState } from 'react';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm'; // Import the ExpenseForm component
import BudgetItem from '../components/BudgetItem';

const BudgetPage = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]); // Add state for expenses

  const handleAddIncome = (newIncome) => {
    setIncomeList([...incomeList, newIncome]);
  };

  const handleCategorySelect = (selectedIncome, category) => {
    // Handle the logic to assign a category to the selected income
    console.log(`Income '${selectedIncome.name}' categorized as '${category}'.`);
  };

  const handleAddExpense = (newExpense) => {
    setExpenseList([...expenseList, newExpense]);
  };

  return (
    <div>
      <h2>Budget Page</h2>
      <IncomeForm onAddIncome={handleAddIncome} />

      <h3>Income List</h3>
      {incomeList.map((income) => (
        <BudgetItem key={income.name} income={income} onCategorySelect={handleCategorySelect} />
      ))} {/* Close parentheses here */}

      <h3>Expense List</h3>
      {expenseList.map((expense) => (
        <BudgetItem key={expense.name} expense={expense} onCategorySelect={handleCategorySelect} />
      ))} {/* Close parentheses here */}

      <ExpenseForm onAddExpense={handleAddExpense} /> {/* Render ExpenseForm for adding expenses */}
    </div>
  );
};

export default BudgetPage;
