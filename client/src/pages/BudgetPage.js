// BudgetPage.js

import React, { useState } from 'react';
import IncomeForm from '../components/IncomeForm';
import BudgetItem from '../components/BudgetItem';

const BudgetPage = () => {
  const [incomeList, setIncomeList] = useState([]);

  const handleAddIncome = (newIncome) => {
    setIncomeList([...incomeList, newIncome]);
  };

  const handleCategorySelect = (selectedIncome, category) => {
    // Handle the logic to assign a category to the selected income
    console.log(`Income '${selectedIncome.name}' categorized as '${category}'.`);
  };

  return (
    <div>
      <h2>Budget Page</h2>
      <IncomeForm onAddIncome={handleAddIncome} />

      <h3>Income List</h3>
      {incomeList.map((income) => (
        <BudgetItem key={income.name} income={income} onCategorySelect={handleCategorySelect} />
      ))}
    </div>
  );
};

export default BudgetPage;
