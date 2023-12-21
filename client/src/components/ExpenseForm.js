// ExpenseForm.js

import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    // Validate and prevent adding empty or invalid expense
    if (expenseName.trim() !== '' && !isNaN(newExpense.amount)) {
      onAddExpense(newExpense);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  return (
    <div>
      <label>
        Expense Item:
        <input type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
      </label>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
