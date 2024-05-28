import React, { useState, useEffect } from 'react';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';
import BudgetItem from '../components/BudgetItem';
import BudgetChart from '../components/BudgetChart';

const BudgetPage = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [chartData, setChartData] = useState([]);

  const handleAddIncome = (newIncome) => {
    setIncomeList([...incomeList, newIncome]);
  };

  const handleCategorySelect = (selectedIncome, category) => {
    console.log(`Income '${selectedIncome.name}' categorized as '${category}'.`);
  };

  const handleAddExpense = (newExpense) => {
    setExpenseList([...expenseList, newExpense]);
  };

  useEffect(() => {
    // Update chart data whenever income or expenses change
    const newChartData = calculateChartData(incomeList, expenseList);
    setChartData(newChartData);
  }, [incomeList, expenseList]);

  const calculateChartData = (incomes, expenses) => {
    // Implement your logic to calculate and format chart data based on incomes and expenses
    // Return an array of objects with { date, income, expenses }
    // You need to implement this logic based on your application requirements
    return [];
  };

  return (
    <div>
      <h2>Budget Page</h2>
      <IncomeForm onAddIncome={handleAddIncome} />

      <h3>Income List</h3>
      {incomeList.map((income) => (
        <BudgetItem key={income.name} income={income} onCategorySelect={handleCategorySelect} />
      ))}

      <h3>Expense List</h3>
      {expenseList.map((expense) => (
        <BudgetItem key={expense.name} expense={expense} onCategorySelect={handleCategorySelect} />
      ))}

      <ExpenseForm onAddExpense={handleAddExpense} />

      <h3>Budget Performance Chart</h3>
      <BudgetChart data={chartData} />
    </div>
  );
};

export default BudgetPage;
